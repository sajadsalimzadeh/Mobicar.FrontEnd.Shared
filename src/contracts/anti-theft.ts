import { FullEntity } from "@framework/contracts"

export interface AntiTheft extends FullEntity {
    externalId: number
    name: string
    description:string
}

export interface AntiTheftSaveRequest {
    id:any
    externalId: number
    name: string
    description:string
}
