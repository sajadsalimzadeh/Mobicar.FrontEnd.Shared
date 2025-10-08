import { FullEntity } from "@framework/contracts"
import { DeviceVersioningPolicy } from "../policy";
import { Server } from "../organization/server"
export interface Firmware extends FullEntity {
    version: string
    description: string;
    contentFilename: string
    dataServerId: string
    accessibility: string[]
    policies: DeviceVersioningPolicy[]
    dataServer: Server
}

export interface FirmwareSaveRequest {
    id: any
    version: string
    description: string;
    contentFilename: string
    dataServerId: string
    accessibility: string[]
    policies: DeviceVersioningPolicy[]
    dataServer: Server
}

export interface FirmwareDto {
    id: string;
    version: string;
    description: string;
}
