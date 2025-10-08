import { CreationEntity } from "@framework/contracts"

export interface DeviceActivationPassword extends CreationEntity {
    serial: string
    password: string
    isConsumed?: boolean
    consumeTime?: string
}

export interface DeviceActivationPasswordSaveRequest {
    id: any
    serial: string
    password: string
}

export interface DeviceActivationPasswordResetRequest {
    password: string
}