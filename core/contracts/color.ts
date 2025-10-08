import { FullEntity } from "@framework/contracts";

export interface Color extends FullEntity {
    name: string
}

export interface ColorSaveRequest {
    id: any
    name: string
}
