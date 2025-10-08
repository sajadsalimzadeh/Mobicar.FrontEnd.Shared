// export interface Alarm {
//     id: string
//     name: string
//     externalId: number
//     hasThreshold: boolean
//     oneTimeOrBurst: boolean
//     unit: string
//     operator: string
//     description: string
// }

import { FullEntity } from "@framework/contracts"
import { EnumUtil } from "@framework/utils"

export interface AlarmConfig {
    id: string
    alarmId: string
    alarm: Alarm
    deviceId: string
    device: string
    firstNumber: boolean
    secondNumber: boolean
    firstTrustedNumber: boolean
    secondTrustedNumber: boolean
    firstEmail: boolean
    secondEmail: boolean
    appNotification: boolean
    timeInterval: number
    threshold: number
}

export enum AlarmType {
    Data = 0,
    System = 1,
    Parameter = 2
}

export const AlarmTypes = EnumUtil.getObject(AlarmType);

export enum Operator {
    SmallerThan = 0,
    EqualsWith = 1,
    GraterThan = 2,
}

export const Operators = EnumUtil.getObject(Operator);

export interface Alarm extends FullEntity {
    externalId: number
    type: AlarmType
    name: string
    hasThreshold: boolean
    isSigleTime: boolean
    operator: Operator
    unit: string
    defaultMessage: string
    description: string
    parameterId: string
}

export interface AlaramSaveRequest {
    id: any
    externalId: number
    type: AlarmType
    name: string
    hasThreshold: boolean
    isSigleTime: boolean
    operator: Operator
    unit: string
    defaultMessage: string
    parameterId: string
    description: string
}
