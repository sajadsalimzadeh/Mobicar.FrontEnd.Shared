import { BaseDataEcuEntity } from "./entity";
import { EcuParameterItem } from "./ecu";

export interface TripParameter extends BaseDataEcuEntity {
    items: EcuParameterItem[];
}