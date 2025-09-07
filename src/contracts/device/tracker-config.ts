import {Shape} from "@app/contracts/shape";

export interface TrackerConfig {
    sensorInfo: SensorInfo
    trustedInfo: TrustedInfo
    dataCollectionConfig: DataCollectionConfig
    geofenceConfigs: GeofenceConfigs
    alarmConfigs: AlarmConfig[]
    ecuConfigs: EcuConfig[]
}

export interface DataCollectionConfig {
    tripEndLogic: number
    syncFrequency: number
    gpsFrequency: number
    sensorFrequency: number
    parameterFrequency: number
    accelerometerFrequency: number
    keepWorkingAfterTrip: boolean
    afterTrip: AfterTrip
}

export interface AfterTrip {
    syncFrequency: number
    syncDuration: number
    gpsFrequency: number
    gpsDuration: number
    sensorFrequency: number
    sensorDuration: number
}

export interface TrustedInfo {
    cellphone1: boolean
    cellphone2: boolean
    email1: boolean
    email2: boolean
}

export interface SensorInfo {
    sensorId: string
    portIndex: number
    description: string
}

export interface GeofenceConfigs {
    items: Item[]
}

export interface Item {
    name: string
    shapes: Shape[]
}

export interface AlarmConfig {
    alarmId: string
    frequency: number
    threshold: number
    time: number
    ownerCellphone: boolean
    driverCellphone: boolean
    trustedCellphone1: boolean
    trustedCellphone2: boolean
    trustedEmail1: boolean
    trustedEmail2: boolean
    notification: boolean
    messageTemplate: string
}

export interface EcuConfig {
    name: string
    parameterIds: string[]
}
