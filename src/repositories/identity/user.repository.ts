import { Injectable, Injector } from '@angular/core';
import { CommandResult, QueryResult } from '@framework/contracts';
import { User, UserActivity, UserAgentInfo, UserAgentInfoEditRequest, UserCustomer, UserDto, UserEditOwnRequest, UserInquiryResponse, UserMember, UserPrivilege, UserPushSubscriptionRequest, UserResetPasswordRequest, UserSearchRequest as UserSearchRequest, UserSendNotificationRequest, UserStatus } from '../../contracts/identity/user';
import { appSettings } from '../../app';
import { BaseCrudRepository } from "@framework/repositories";
import { Vehicle } from "@app/contracts/vehicle";
import { Token } from '@app/contracts/identity/token';
import { AuthEntity, AuthEntityAccess, AuthEntityAccessItem, AuthLoginInfo, AuthLoginResponse } from "@app/contracts/identity/auth";
import { map, tap } from "rxjs/operators";
import { AccessRepository } from "@app/repositories/identity/access.repository";
import { MessageDto } from '@app/contracts/message';
import { Wallet } from '@app/contracts/finance/wallet';
import { Organization } from '@app/contracts/organization/organization';
import { AuthRepository } from './auth.repository';
import { BankInfo } from '@app/contracts/finance/bank-info';

@Injectable({
    providedIn: 'root'
})
export class UserRepository extends BaseCrudRepository<User> {

    constructor(injector: Injector, private authRepository: AuthRepository) {
        super(injector, appSettings.urls.api, 'Users');
    }

    search(req: UserSearchRequest) {
        return this.http.post<QueryResult<User[]>>(`Search`, req);
    }

    getLoginInfo(id: string, organizationId?: string) {
        return this.http.get<QueryResult<AuthLoginInfo>>(`${id}/LoginInfo?organizationId=${organizationId}`).pipe(this.authRepository.tapLoginInfo());
    }

    getAllActivity(id: any, req: { from: string, to: string }) {
        return this.http.get<QueryResult<UserActivity[]>>(`${id}/Activities`, { params: req })
    }

    getAllVehicle(id: any) {
        return this.http.get<QueryResult<Vehicle[]>>(`${id}/Vehicles`)
    }

    getAllPrivilege(id: any) {
        return this.http.get<QueryResult<UserPrivilege[]>>(`${id}/Privileges`)
    }

    getAllTokens(id: any) {
        return this.http.get<QueryResult<Token[]>>(`${id}/Tokens`)
    }

    getAllMember(id: any) {
        return this.http.get<QueryResult<UserMember[]>>(`${id}/Members`)
    }

    getAllWallet(id: any) {
        return this.http.get<QueryResult<Wallet[]>>(`${id}/Wallets`)
    }

    getAllBankInfo(id: any) {
        return this.http.get<QueryResult<BankInfo[]>>(`${id}/BankInfos`)
    }

    getAllCustomer(id: any) {
        return this.http.get<QueryResult<UserCustomer[]>>(`${id}/Customers`)
    }

    getAllMessage(id: any) {
        return this.http.get<QueryResult<MessageDto[]>>(`${id}/Messages`)
    }

    setStatus(id: string, status: UserStatus) {
        return this.http.patch<QueryResult>(`${id}`, { status })
    }

    editAgentInfo(id: string, req: UserAgentInfo) {
        return this.http.patch<QueryResult>(`${id}/AgentInfo`, req)
    }

    inquiry(params: { username?: string } | { cellphone?: string }) {
        return this.http.get<QueryResult<UserInquiryResponse>>(`Inquiry`, { params });
    }

    login(id: string) {
        return this.http.post<QueryResult<AuthLoginResponse>>(`${id}/Login`, {});
    }

    resetPassword(id: string, req: UserResetPasswordRequest) {
        return this.http.patch<CommandResult>(`${id}/ResetPassword`, req);
    }

    sendNotification(req: UserSendNotificationRequest) {
        return this.http.post<CommandResult>(`Notification`, req);
    }

    getOwn() {
        return this.http.get<QueryResult<UserDto>>(`Own`)
    }

    editOwn(req: UserEditOwnRequest) {
        return this.http.patch<QueryResult>(`Own`, req)
    }

    editOwnAgentInfo(req: UserAgentInfoEditRequest) {
        return this.http.patch<QueryResult>(`Own/AgentInfo`, req)
    }

    getAllOwnOrganization() {
        return this.http.get<QueryResult<Organization[]>>(`Own/Organizations`)
    }

    getAllOwnMember() {
        return this.http.get<QueryResult<UserMember[]>>(`Own/Members`)
    }

    getAllOwnCustomer() {
        return this.http.get<QueryResult<UserCustomer[]>>(`Own/Customers`)
    }

    getAllOwnMessage() {
        return this.http.get<QueryResult<MessageDto[]>>(`Own/Messages`)
    }

    setOwnWebPushSubscription(req: UserPushSubscriptionRequest) {
        return this.http.post<QueryResult>(`Own/WebPushSubscription`, req)
    }
}
