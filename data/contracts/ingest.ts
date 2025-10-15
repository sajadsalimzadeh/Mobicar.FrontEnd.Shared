import { BatteryTestResult } from "../contracts/battery-test";
import { EcuActuatorItem, EcuDtcItem, EcuInfoItem, EcuParameterItem } from "./ecu";

export interface IngestBaseRequest {
    id: string;
    deviceId: string;
    timestamp: string;
    vehicleId?: string;
    vehicleTreePath?: string;
    companyCode?: string;
    ecuFilename?: string;
}

export interface IngestAlarmRequest extends IngestBaseRequest {
    alarmId: string;
    value?: number;
    threshold?: number;
}

export interface IngestAntiTheftStatusRequest extends IngestBaseRequest {
    doorIndicator: boolean;
    shockWhenArmed: boolean;
    ultrasonicWhenArmed: boolean;
    isArmState: boolean;
    isSilentMode: boolean;
    isActiveAlarm: boolean;
    isLedOff: boolean;
    hasPendingFuelCutCommand: boolean;
    isFuelCutOn: boolean;
    isPanicMode: boolean;
    isSirenOn: boolean;
    isInWorkshopMode: boolean;
}

export interface IngestBatteryTestRequest extends IngestBaseRequest {
    processed: BatteryTestResult;
    samples: number[];
}

export interface IngestThirdPartyDataRequest extends IngestBaseRequest {
}

export interface IngestDiagnosticRequest extends IngestBaseRequest {
    sessionId: string;
    isEraseDtc: boolean;
    dtcs: EcuDtcItem[];
    parameters: EcuParameterItem[];
    infos: EcuInfoItem[];
    actuators: EcuActuatorItem[];
}

export enum SatelliteStatus {
    LocationNotFix = 0,
    Location2DFix = 1,
    Location3DFix = 2,
}

export interface LocationItem {
    latitude: number;
    longitude: number;
    altitude?: number;
    satelliteStatus: SatelliteStatus;
    numberOfSatellite: number;
    speed: number;
    heading: number;
    gsmStrength: number;
}

export interface IngestLocationRequest extends IngestBaseRequest {
    items: LocationItem[];
}

export interface MotionItem {
    timestamp: number;

    awx: number;
    awy: number;
    awz: number;
    amx: number;
    amy: number;
    amz: number;
    asx: number;
    asy: number;
    asz: number;

    gwx: number;
    gwy: number;
    gwz: number;
    gmx: number;
    gmy: number;
    gmz: number;
    gsx: number;
    gsy: number;
    gsz: number;
}

export interface IngestMotionRequest extends IngestBaseRequest {
    items: MotionItem[];
}

export interface IngestParameterRequest extends IngestBaseRequest {
    items: EcuParameterItem[];
}

export interface SensorItem {
    key: string;
    value: string;
}

export interface IngestSensorRequest extends IngestBaseRequest {
    items: SensorItem[];
}

export interface IngestTripRequest extends IngestBaseRequest {
    tripStart: string;
    tripEnd: string;
    averageFuelConsumption: number;
    totalFuelConsumption: number;
    totalDistanceEcu: number;
    totalDistanceGps: number;
    totalTimeEcu: number;
    totalTimeGps: number;
    averageSpeedEcu: number;
    averageSpeedGps: number;
    maxSpeedEcu: number;
    maxSpeedGps: number;
    idleTimeEcu: number;
    idleTimeGps: number;
}


export interface IngestRequest {
    alarms: IngestAlarmRequest[];
    antiTheftStatuses: IngestAntiTheftStatusRequest[];
    batteryTests: IngestBatteryTestRequest[];
    ThirdPartyDatas: IngestThirdPartyDataRequest[];
    diagnostics: IngestDiagnosticRequest[];
    locations: IngestLocationRequest[];
    motions: IngestMotionRequest[];
    parameters: IngestParameterRequest[];
    trips: IngestTripRequest[];
}