

export interface EcuDtcItem {
    code: string;
    description: string;
}

export interface EcuParameterItem {
    timestamp: number;
    label: string;
    value: number;
}

export interface EcuInfoItem {
    label: string;
    value: string;
}

export enum EcuActuatorItemStatus {
    Failed = -1,
    Draft = 0,
    Successfully = 1,
}

export interface EcuActuatorItem {
    label: string;
    status: EcuActuatorItemStatus;
}