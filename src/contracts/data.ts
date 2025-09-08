import {Company} from '@sdk/contracts/company';
import {AnalyzeBatteryResponse} from '@dongle/contracts/data-analyzer';

export interface TripRecord {
    id: number;

    tripId: string;
    serial: string;

    timestamp: string;
    tripStart: string;
    tripEnd?: string;

    averageFuelConsumption: number;
    averageSpeedECU: number;
    averageSpeedGPS: number;
    maxSpeedECU: number;
    maxSpeedGPS: number;

    totalFuelConsumption: number;
    totalDistanceECU: number;
    totalDistanceGPS: number;
    totalTimeECU: number;
    totalTimeGPS: number;
    idleTimeECU: number;
    idleTimeGPS: number;

    gpsStartTimestamp?: number;
    ecuStartTimestamp?: number;

    isFinish: boolean;
}

export interface AlarmEventRecord {
    id: number;
    serial: string;
    tripId: string;
    alarmId: number;
    timestamp: number;
}

export interface ParameterRecord {
    id: number;
    serial: string;
    tripId: string;
    parameterId: string;
    value: number;
    ecuId: string;
    logDate: string;
    timestamp: number;
}

export interface LocationRecord {
    id: number;
    serial: string;
    tripId: string;
    latitude: number;
    longitude: number;
    heading: number;
    speed: number;
    logDate: string;
}

export interface DiagnosticRecord {
    id: number;
    vehicleId: string;
    date: string;
    ecuId: string;
    serial: string;
    latitude: number;
    longitude: number;
    altitude: number;
    code: string;
    description: string;
    timestamp: number;
}

export interface DtcRecord {
    id: number;
    date: string;
    code?: string;
    description?: string;
    vehicleId?: string;
    ecuId?: string;
    serial?: string;
    latitude?: number;
    longitude?: number;
    altitude?: number;
    encryptedCode: string;
}

export interface BatteryRecord {
    id: number;
    timestamp: string;
    serial: string;
    samples: number[];
    brand?: string;
    latitude?: number;
    longitude?: number;
    altitude?: number;
    processed?: AnalyzeBatteryResponse;
}

export interface DataPackRecord {
    id: number;
    timestamp: string;
    company: Company;
    organizationName: string;
    userName: string;
    serial: string;
    refId: string;
    description: string;
    value: DataPackRecordValue;
}

export interface DataPackRecordValue {
    location?: DataPackRecordValueLocation;
    vehicle?: DataPackRecordValueVehicle;
    battery?: DataPackRecordValueBattery;
    dtcs: DataPackRecordValueDtc[];
}

export interface DataPackRecordValueLocation {
    latitude?: number;
    longitude?: number;
    altitude?: number;
}

export interface DataPackRecordValueEcuType {
    code: number;
    name: string;
}

export interface DataPackRecordValueVehicle {
    tree?: string[];
    vin?: string;
    ecuTypes?: DataPackRecordValueEcuType[];
}

export interface DataPackRecordValueBattery {
    samples: number[];
    process?: AnalyzeBatteryResponse;
}

export interface DataPackRecordValueDtc {
    ecuType: DataPackRecordValueEcuType;
    ecuCode?: string;
    items: DataPackRecordValueDtcItem[];
}

export interface DataPackRecordValueDtcItem {
    encryptedCode: string;
    code?: string;
    description?: string;
}