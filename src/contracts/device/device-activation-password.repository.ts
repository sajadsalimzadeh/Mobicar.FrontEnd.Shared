import {Injectable, Injector} from '@angular/core';
import {appSettings} from '../../app';
import {BaseCrudRepository} from "@framework/repositories";
import { DeviceActivationPassword, DeviceActivationPasswordResetRequest, DeviceActivationPasswordSaveRequest } from '@shared/contracts/device/device-activation-password';
import { CommandResult } from '@framework/contracts';
import { BASE_URL_SHARED } from '@shared/config';


@Injectable({
    providedIn: 'root'
})
export class DeviceActivationPasswordRepository extends BaseCrudRepository<DeviceActivationPassword, DeviceActivationPasswordSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'DeviceActivationPasswords');
    }

    reset(id: string, req: DeviceActivationPasswordResetRequest) {
        return this.http.post<CommandResult>(`${id}/Reset`, req);
    }
}

