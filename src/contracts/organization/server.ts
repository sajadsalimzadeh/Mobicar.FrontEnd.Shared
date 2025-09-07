import { FullEntity } from "@framework/contracts"
import { EnumUtil } from "@framework/utils"

export interface Server extends FullEntity {
    name: string
    address: string
    organizationId: string
    codec: ServerCodec
    deviceConfig: ServerDeviceConfig
}


export interface ServerSaveRequest {
    id: any
    name: string
    address: string
    codec: ServerCodec
    organizationId: string
    deviceConfig: ServerDeviceConfig
}

export enum ServerCodec {
    V1 = 1,
    V2 = 2,
    V3 = 3,
}

export const ServerCodecs = EnumUtil.getObject(ServerCodec);

export interface ServerDeviceConfig {
    tokenLength: number
    tokenTimeToLive: number
    maxRequestPerMinutes: number
}