import { Injectable, Injector } from '@angular/core';
import { QueryResult } from '@framework/contracts';
import { BASE_URL_SHARED } from "../../config";
import {
    AuthLoginResponse,
    AuthRegisterRequest,
    AuthLoginWithOtpRequest,
    AuthForgetPasswordRequest,
    AuthLoginWithPasswordRequest,
    organizationDto,
    AuthLoginInfo,
    AuthCheckAccess,
    AuthEntity,
    AuthEntityAccess,
    AuthEntityAccessItem,
    AuthOrganization,
} from '../../contracts/identity/auth';
import { CaptchaValidateRequest } from '../../contracts/identity/captcha';
import { BaseApiRepository } from '@framework/repositories';
import { AccessRepository } from './access.repository';
import { map } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthRepository extends BaseApiRepository {
    loginInfo!: AuthLoginInfo;
    currentOrganization?: AuthOrganization;

    constructor(injector: Injector, private accessRepository: AccessRepository) {
        super(injector, injector.get(BASE_URL_SHARED), 'Auth')
    }

    tapLoginInfo() {
        return map<QueryResult<AuthLoginInfo>, QueryResult<AuthLoginInfo>>(res => {
            if (res.data) {
                try {
                    const accessesDictionary = this.accessRepository.accessDictionary;
                    const loginInfo = res.data;

                    const accessibility: string[] = [];
                    if (loginInfo.actionAccess?.accessibility) {
                        for (let i = 0; i < loginInfo.actionAccess.accessibility.length; i++) {
                            const access = loginInfo.actionAccess.accessibility[i].toLocaleLowerCase();
                            accessibility.push(...accessesDictionary[access]);
                        }
                        loginInfo.actionAccess.accessibility = accessibility;
                    }

                    const processAuthEntities = (entities: AuthEntity[], accesses: AuthEntityAccess) => {
                        try {
                            if (!entities) return;

                            const entityAccess: { [key: string]: AuthEntityAccessItem } = {};
                            for (const item of accesses.items) {

                                for (const id of item.ids) {
                                    let entityExists = entityAccess[id];
                                    if (!entityExists) {
                                        entityAccess[id] = {
                                            ids: [id],
                                            isFullAccess: item.isFullAccess,
                                            accessibility: item.accessibility ?? [],
                                            dataFilters: item.dataFilters
                                        };
                                    } else {
                                        if (item.isFullAccess) entityExists.isFullAccess = true;
                                        entityExists.accessibility.push(...item.accessibility);
                                    }
                                }
                            }

                            for (const entity of entities) {
                                const access = entityAccess[entity.id];
                                if (!access) continue;

                                const accessibility: string[] = [];
                                for (const item of access.accessibility) {
                                    accessibility.push(...(accessesDictionary[item.toLowerCase()] ?? []));
                                }
                                entity.isFullAccess = access.isFullAccess;
                                entity.accessibility = accessibility;
                            }
                        } catch (e) {
                            console.error(e);
                        }
                    }
                    processAuthEntities(loginInfo.devices, loginInfo.deviceAccess);
                    loginInfo.devices.forEach(device => {
                        device.hardware = loginInfo.hardwares.find(hardware => hardware.id === device.hardwareId);
                        device.organization = loginInfo.organizations.find(organization => organization.id === device.organizationId);
                        device.user = loginInfo.users.find(user => user.id === device.userId);
                        device.workflowState = loginInfo.workflowStates.find(state => state.id === device.workflowStateId);
                    });

                    processAuthEntities(loginInfo.vehicles, loginInfo.vehicleAccess);
                } catch (e) {
                    console.error(e);
                }
            }
            return res;
        })
    }

    hasAccess(accesses: string | string[] | AuthCheckAccess | AuthCheckAccess[]): boolean {
        let accessesArray: AuthCheckAccess[] = [];
        if (typeof accesses === 'string') {
            accessesArray = [{ value: accesses.toLowerCase(), type: 'action' }]
        } else if (!Array.isArray(accesses)) {
            accesses.value = accesses.value.toLowerCase();
            accessesArray = [accesses]
        } else {
            accessesArray = accesses.map(access => {
                if (typeof access == 'string') {
                    return { value: access.toLowerCase(), type: 'action' }
                }
                return access;
            });
        }
        let hasAccess = accessesArray.length == 0;
        if (!hasAccess) {
            for (const access of accessesArray) {
                if (!access.value) {
                    hasAccess = true;
                    break;
                }
                if (access.type === 'action') {
                    if (this.loginInfo.actionAccess.isFullAccess || this.loginInfo.actionAccess.accessibility.includes(access.value)) {
                        hasAccess = true;
                        break;
                    }
                }
                else if (access.type === 'device') {
                    const deviceAccess = this.loginInfo.devices.find(x => x.id == access.deviceId);
                    if (deviceAccess && (deviceAccess.isFullAccess || deviceAccess.accessibility.includes(access.value))) {
                        hasAccess = true;
                        break;
                    }
                }
                else if (access.type === 'organization') {
                    if (this.loginInfo.organization && (this.loginInfo.actionAccess.isFullAccess || this.loginInfo.actionAccess.accessibility.includes(access.value))) {
                        hasAccess = true;
                        break;
                    }
                }
                else if (access.type === 'vehicle') {
                    const vehicleAccess = this.loginInfo.vehicles.find(x => x.id == access.vehicleId);
                    if (vehicleAccess && (vehicleAccess.isFullAccess || vehicleAccess.accessibility.includes(access.value))) {
                        hasAccess = true;
                        break;
                    }
                }
            }
        }
        return hasAccess;
    }

    getLoginInfo(organizationId?: string) {
        return this.http.get<QueryResult<AuthLoginInfo>>(`${organizationId ? `?organizationId=${organizationId}` : ''}`).pipe(this.tapLoginInfo());
    }

    loginWithPassword(req: AuthLoginWithPasswordRequest, captcha: CaptchaValidateRequest) {
        return this.http.post<QueryResult<AuthLoginResponse>>(`LoginWithPassword`, req, {
            headers: {
                'Captcha': `${captcha.key} ${captcha.value}`
            }
        });
    }

    loginWithOtp(req: AuthLoginWithOtpRequest) {
        return this.http.post<QueryResult<AuthLoginResponse>>(`LoginWithOtp`, req);
    }

    register(req: AuthRegisterRequest) {
        return this.http.post<QueryResult<AuthLoginResponse>>(`Register`, req);
    }

    forgetPassword(req: AuthForgetPasswordRequest) {
        return this.http.post<QueryResult<AuthLoginResponse>>(`ForgetPassword`, req);
    }

    userOrganizations() {
        return this.http.get<QueryResult<organizationDto[]>>(`Organizations`);

    }

    logout() {
        return this.http.delete<QueryResult<any>>(``);
    }
}

