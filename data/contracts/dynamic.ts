import { BaseDataEntity } from "./entity";

export enum DynamicType {
    None = 0,
    Battery = 1,
    Catalyst = 2,
    AntiTheftStatus = 3
}

export abstract class DynamicData<T = any> {
    abstract $type: 'battery' | 'catalyst' | 'antiTheftStatus' | string;

    constructor(data?: Partial<T>) {
        Object.assign(this, data);
    }
}

export interface Dynamic extends BaseDataEntity {
    type: DynamicType;
    data?: DynamicData;
}

