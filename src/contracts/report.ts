import { EnumUtil } from "@framework/utils";

export enum ReportPeriodType {
    Weekly = 1,
    Monthly = 2,
    Yearly = 3,
}

export const ReportPeriodTypes = EnumUtil.getObject(ReportPeriodType);

export interface ReportGetAgentSaleDeviceResponse {
    lebels: string[];
    profits: number[];
    counts: number[];
}

export interface ReportGetAgentSalePackageResponse {
    id: string;
    name: string;
    count: number;
}


export interface TripRequest {
    selectedDeviceIds: string[]
    dateFrom: string
    dateTo: string
    organizationId: string
}

export interface TripResponse {
    serial: string
    trips: TripResponseItem[]
}

export interface TripResponseItem {
    tripStart: string
    tripEnd: string
    averageFuelConsumption: number
    totalFuelConsumption: number
    totalDistanceECU: number
    totalDistanceGPS: number
    totalTimeECU: number
    totalTimeGPS: number
    averageSpeedECU: number
    averageSpeedGPS: number
    maxSpeedECU: number
    maxSpeedGPS: number
    idelTimeECU: number
    idelTimeGPS: number
    tripId: string
    afterTrip: boolean
    timestamp: string
    insertTime: string
    serial: string
}

export interface TripParametersRequest {
    serial: string
    tripId: string
    startTime: string
    endTime: string
    commandType: number
}

export interface TripLocationResponse {
    timestamp: string
    insertTime: string
    serial: string
    tripId: string
    afterTrip: boolean
    latitude: number
    longitude: number
    altitude: number
    satelliteGpsStatus: number
    numberOfSatellite: number
    gpsSpeed: number
    gpsHeading: number
    gsmSterngth: number
}

export interface TripAlarmResponse {
    timestamp: string
    insertTime: string
    serial: string
    tripId: string
    afterTrip: boolean
    alarmId: number
    setClear: number
    maxValue: number
    threshold: number
    latitude: number
    longitude: number
}

export interface TripParametersResponse {
    timestamp: string;
    insertTime: string;
    serial: string;
    tripId: string;
    afterTrip: boolean;
    ecuId: string;
    paramNameId: number;
    paramName: string;
    paramValue: number;
}

export interface TripSensorsResponse {
    timestamp: string
    insertTime: string
    serial: string
    tripId: string
    afterTrip: boolean
    sensorId: number
    sensorValue: number
}

export interface TripCommandsResponse {
    timestamp: string
    insertTime: string
    serial: string
    id: string
    commandType: number
    ecuIds: string[]
    command: string
    ecuId: string
    result: number
    codeId: string
    code: string
    description: string
}

export interface TripMotionsResponse {
    timestamp: string
    serial: string
    tripId: string
    afterTrip: boolean
    accel_Mean_X: number
    accel_Mean_Y: number
    accel_Mean_Z: number
    gyro_Mean_X: number
    gyro_Mean_Y: number
    gyro_Mean_Z: number
}

export interface LocationRequest {
    selectedDeviceIds: string[]
    dateFrom: string
    dateTo: string
    organizationId: string
    minSpeed: number
    maxSpeed: number
    satelliteGpsStatus: number
    numberOfSatelliteMin: number
    numberOfSatelliteMax: number
}

export interface LocationReponse {
    tripId: string
    serial: string
    locations: Location[]
}

export interface LocationResponseItem {
    latitude: number
    longitude: number
    altitude: number
    satelliteGpsStatus: number
    numberOfSatellite: number
    gpsSpeed: number
    gpsHeading: number
    gsmSterngth: number
    tripId: string
    afterTrip: boolean
    timestamp: string
    insertTime: string
    serial: string
}
