import { Claim } from "../../contracts/claim";
import { CreationEntity, FullEntity } from "@framework/contracts";
import { Privilege, PrivilegeAction, PrivilegeEntity } from "../../contracts/identity/access";
import { Gender } from "../gender";
import { Order, OrderPaymentMethod, OrderStatus, OrderType } from "../sale/order";
import { Attachment } from "@framework/contracts/attachment";
import { Level } from "./level";
import { EnumUtil } from "@framework/utils";

export interface User extends FullEntity {
    name: string
    username: string
    gender: number
    locationId: string
    nationalCode: string
    cellphone: string
    cellphoneConfirmTime: string
    email: string
    emailConfirmTime: string
    birthDate: string
    thumbnailFilename: string
    passwordSalt: string
    passwordHash: string
    twoFactorSecret: string
    maxTokenActiveCount: number
    tokenTimeToLiveInMinutes: number
    lockedOutEnd: string
    loginFailedCount: number
    isIpConstraintEnable: boolean
    isTwoFactorAuthenticationEnable: boolean
    status: number
    whiteListIpV4: string[]
    workingTimes: UserWorkingTime[]
    claims: Claim[]
    webPushSubscriptions: UserPushSubscriptionRequest[]
    organizationIds: string[]
    privilegeModifyTime: string
    
    driverInfo?: UserDriverInfo
    agentInfo?: UserAgentInfo

    location?: Location;
}

export interface UserSearchRequest {
    username?: string;
    name?: string;
    nationalCode?: string;
    status?: UserStatus;
    organizationId?: string;
    deviceSerial?: string;
    firmareId?: string;
    hardwareId?: string;
    workflowStateId?: string;
}

export interface UserSendNotificationRequest {
    userIds: string[];
    appName: string;
    payload: UserSendNotificationPayload;
}

export interface UserSendNotificationPayload {
    title: string;
    body: string;
    icon?: string;
    data?: any;
}

export interface UserActivity {
    id: string,
    time: string,
    activity: string,
    status: string,
    description: string
}

export interface UserWorkingTime {
    dayOfWeek: number
    start: string
    end: string
}

export interface UserDriverInfo {

}

export interface UserAgentInfo {
    levelId: string;
    name: string;
    bannerFilename: string;
    description: string;
    telephone: string;
    address: string;
    latitude: number;
    longitude: number;
    isUpgradable: boolean;
    isDowngradable: boolean;
    attachments: Attachment[];

    level?: Level;
}

export enum UserStatus {
    InActive = 0,
    Active = 1,
}

export const UserStatuses = EnumUtil.getObject(UserStatus);

export const UserStatusOptions = [
    { key: UserStatus.Active, value: 'فعال' },
    { key: UserStatus.InActive, value: 'غیر فعال' },
]

export interface UserPrivilege extends CreationEntity {
    name: string;
    userId: string;
    assignerId?: string;
    organizationId?: string;
    from?: string;
    to?: string;

    groupIds: string[];

    privileges: Privilege[];

    organizationName?: string;
    actionPrivileges?: PrivilegeAction[];
    devicePrivileges?: PrivilegeEntity[];
    vehiclePrivileges?: PrivilegeEntity[];

    user?: User;
    assigner?: User;
}

export interface UserDto {
    id: string
    name: string
    username: string
    gender: Gender
    locationId?: string
    nationalCode: string
    cellphone: string
    cellphoneConfirmTime: string
    email: string
    emailConfirmTime: string
    birthDate?: string
    thumbnailFilename: string
    isIpConstraintEnable: boolean
    isTwoFactorAuthenticationEnable: boolean
    status: UserStatus
    privilegeModifyTime: string
    organizationIds: string[];

    agentInfo?: UserAgentInfo
    driverInfo?: UserDriverInfo
}

export interface UserMember {
    id: string;
    name: string;
    username: string;
    parentId: string;

    children: UserMember[]
}

export interface UserCustomer {
    id: string;
    name: string;
    username: string;

    orders: UserCustomerOrder[];
}

export interface UserCustomerOrder {
    totalAmount: number;
    paymentMethod: OrderPaymentMethod;
    type: OrderType;
    status: OrderStatus;
    creationTime: string;
}

export interface UserDriverInfo {

}

export interface UserEditOwnRequest {
    name: string;
    gender: Gender;
    cellphone: string;
    email: string;
    locationId: string;
    nationalCode: string;
    birthDate?: string;
    thumbnailFilename: string;
}

export interface UserAgentInfoEditRequest {
    name: string;
    bannerFilename: string;
    description: string;
    telephone: string;
    address: string;
    latitude: number;
    longitude: number;
}

export interface UserInquiryResponse {
    id: string;
    name: string;
    username: string;
}

export interface UserDevices {
    id: string,
    serial: string,
    owner: string,
    status: string
}

export interface UserPushSubscriptionRequest {
    appName: string;
    endpoint: string
    p256dh: string;
    auth: string;
}

export interface UserResetPasswordRequest {
    password: string;
}