import { BaseDataEntity } from "./entity";
import { MotionItem } from "./ingest";

export interface TripMotion extends BaseDataEntity {
    items: MotionItem[];
}