import { User } from "./user"
import { UserAgentBrowser, UserAgentDevice, UserAgentOs } from "../user-agent"
import { EnumUtil } from "@framework/utils"

export interface Token {
    id: string
    userId: string
    expireTime: string
    terminateTime: string
    status: TokenStatus
    creationTime: string
    clientInfo?: TokenClientInfo
    user?: User
}
export enum TokenStatus {
    Active = 0,
    TerminateByUser = 1,
    TerminateByAdmin = 2,
    TerminateBySystemMaxTokenCount = 3
}

export const TokenStatuses = EnumUtil.getObject(TokenStatus);

export const TokenStatusOptions = [
    { key: TokenStatus.Active, value: 'فعال' },
    { key: TokenStatus.TerminateByUser, value: 'غیر فعال توسط کاربر' },
    { key: TokenStatus.TerminateByAdmin, value: 'غیر فعال توسط مدیر' },
    { key: TokenStatus.TerminateBySystemMaxTokenCount, value: 'خاتمه بر اساس حداکثر تعداد توکن سیستم' },

]

export interface TokenClientInfo {
    device: UserAgentDevice
    os: UserAgentOs
    browser: UserAgentBrowser
    ipV4: string
    ipV6: string
    location: LatLng
    timezone: string
}

export interface LatLng {
    lat: number
    lng: number
}
