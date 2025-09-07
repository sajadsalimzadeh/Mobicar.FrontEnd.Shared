import { EnumUtil } from "@framework/utils";

export interface Location {
    id: any;
    name: string
    type: LocationType
    parentId?: string
    parent?: Location
}


export interface LocationSaveRequest {
    id: any
    name: string
    type: LocationType
    parentId: string
    parent: Location
}

export enum LocationType {
    Country = 1,
    State = 2,
    City = 3,
}

export const LocationTypes = EnumUtil.getObject(LocationType);