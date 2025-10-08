import { DynamicData } from "./dynamic";


export enum CatalystStatus {
    Unknown = -1,
    VeryWeak = 0,
    Weak = 1,
    Medium = 2,
    Good = 3,
    VeryGood = 4,
}

export class CatalystTestData implements DynamicData {
    $type = 'catalyst' as const;
    
    status: CatalystStatus = CatalystStatus.Unknown;
}