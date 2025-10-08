import { BaseDataEntity } from "./entity";

export enum DynamicType {
    None = 0,
    Battery = 1,
    Catalyst = 2,
    AntiTheftStatus = 3
}

export interface DynamicData {
    $type: 'battery' | 'catalyst' | 'antiTheftStatus' | string;
}

export interface Dynamic extends BaseDataEntity {
    type: DynamicType;
    data?: DynamicData;
}

