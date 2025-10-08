import { BaseDataEntity } from "./entity";

export interface Alarm extends BaseDataEntity {
    alarmId: string;
    value?: number;
    threshold?: number;
}