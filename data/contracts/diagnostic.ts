import { BaseDataEcuEntity } from "./entity";
import { EcuActuatorItem, EcuDtcItem, EcuInfoItem, EcuParameterItem } from "./ecu";

export interface Diagnostic extends BaseDataEcuEntity {
    sessionId: string;
    isEraseDtc: boolean;
    dtcs: EcuDtcItem[];
    parameters: EcuParameterItem[];
    infos: EcuInfoItem[];
    actuators: EcuActuatorItem[];
}   