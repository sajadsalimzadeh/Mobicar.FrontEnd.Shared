import { DynamicData } from "./dynamic";


export enum CatalystResult {
    Unknown = -1,
    VeryWeak = 0,
    Weak = 1,
    Medium = 2,
    Good = 3,
    VeryGood = 4,
}

export class CatalystTestResult extends DynamicData<CatalystTestResult> {
    $type = 'catalyst' as const;
    oxygenUpstreamSamples: number[] = [];
    oxygenDownstreamSamples: number[] = [];
    result: CatalystResult = CatalystResult.Unknown;
}