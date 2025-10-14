import { DynamicData } from "./dynamic";

export interface BatteryTestRequest {
    samples: number[];
}

export enum BatteryHealthStatus {
    Unknown = -1,
    VeryWeak = 0,
    Weak = 1,
    Medium = 2,
    Good = 3,
    VeryGood = 4,
}

export enum BatteryChargeStatus {
    Unknown = -1,
    Empty = 0,
    VeryLow = 1,
    Low = 2,
    Medium = 3,
    High = 4,
    Full = 5,
}

export enum BatteryAlternatorStatus {
    Unknown = -1,
    Normal = 0,
    LowVoltage = 1,
    HighVoltage = 2,
}

export class BatteryTestResult extends DynamicData<BatteryTestResult> {
    $type = 'battery' as const;

    samples: number[] = [];

    healthStatus: BatteryHealthStatus = BatteryHealthStatus.Unknown;
    chargeStatus: BatteryChargeStatus = BatteryChargeStatus.Unknown;
    alternatorStatus: BatteryAlternatorStatus = BatteryAlternatorStatus.Unknown;
}