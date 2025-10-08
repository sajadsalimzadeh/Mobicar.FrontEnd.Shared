import { BaseDataEntity } from "./entity";
import { SensorItem } from "./ingest";

export interface TripSensor extends BaseDataEntity {
    items: SensorItem[];
}