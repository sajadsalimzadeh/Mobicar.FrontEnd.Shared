import { BaseDataEntity } from "./entity";
import { LocationItem } from "./ingest";

export interface TripLocation extends BaseDataEntity {
    items: LocationItem[];
}