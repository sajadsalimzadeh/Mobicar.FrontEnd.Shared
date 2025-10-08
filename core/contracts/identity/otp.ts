import { CreationEntity } from "@framework/contracts";
import { EnumUtil } from "@framework/utils";

export enum OtpType {
    Sms = 1,
    Email = 2,
    Call = 3,
}

export const OtpTypes = EnumUtil.getObject(OtpType);

export interface OtpSendRequest {
    type: OtpType;
    receiver: string;
}


export interface Otp extends CreationEntity {
    receiver: string
    code: string
    remainTryCount: number
    isUsed: boolean
    expireTime: string
    description: string
}
