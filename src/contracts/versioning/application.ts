import { FullEntity } from "@framework/contracts"
import { DeviceVersioningPolicy } from "../policy"

export interface Application extends FullEntity {
    version: string
    url: string
    description: string
    policies: DeviceVersioningPolicy[]
    accessibility: string[]
}

export interface ApplicationSaveRequest {
    id: any
    version: string
    url: string
    description: string
    policies: DeviceVersioningPolicy[]
    accessibility: string[]
}