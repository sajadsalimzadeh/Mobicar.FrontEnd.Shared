import { FullEntity } from "@framework/contracts"
import { DeviceVersioningPolicy } from "../policy"

export interface ApplicationVersion extends FullEntity {
    version: string
    url: string
    description: string
    policies: DeviceVersioningPolicy[]
    accessibility: string[]
}

export interface ApplicationVersionSaveRequest {
    id: any
    version: string
    url: string
    description: string
    policies: DeviceVersioningPolicy[]
    accessibility: string[]
}