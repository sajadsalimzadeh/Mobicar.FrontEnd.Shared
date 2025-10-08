import { BatteryAlternatorStatus, BatteryChargeStatus, BatteryHealthStatus, BatteryTestResult } from "@data/contracts/battery-test";
import { BaseDataEntity } from "./entity";

export interface ThirdPartyDataCompany {
    code: string;
    name: string;
}

export interface ThirdPartyDataValue {
    location?: ThirdPartyDataValueLocation;
    vehicle?: ThirdPartyDataValueVehicle;
    battery?: ThirdPartyDataValueBattery;
    dtcs: ThirdPartyDataValueDtc[];
}

export interface ThirdPartyDataValueLocation {
    latitude?: number;
    longitude?: number;
    altitude?: number;
}

export interface ThirdPartyDataValueEcuType {
    code: number;
    name: string;
}

export interface ThirdPartyDataValueVehicle {
    tree?: string[];
    vin?: string;
    ecuTypes?: ThirdPartyDataValueEcuType[];
}

export interface ThirdPartyDataValueBattery {
    samples: number[];
    
    healthStatus: BatteryHealthStatus;
    chargeStatus: BatteryChargeStatus;
    alternatorStatus: BatteryAlternatorStatus;
}

export interface ThirdPartyDataValueDtc {
    ecuType: ThirdPartyDataValueEcuType;
    ecuCode?: string;
    items: ThirdPartyDataValueDtcItem[];
}

export interface ThirdPartyDataValueDtcItem {
    code?: string;
    description?: string;
}

export interface ThirdPartyData extends BaseDataEntity {
    company: ThirdPartyDataCompany;
    organizationName: string;
    userName: string;
    serial: string;
    refId: string;
    description: string;
    value: ThirdPartyDataValue;
}