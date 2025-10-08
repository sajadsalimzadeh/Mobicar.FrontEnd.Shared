import { DynamicData } from "./dynamic";

export class AntiTheftStatus implements DynamicData {
    $type = 'antiTheftStatus' as const;

    doorIndicator: boolean = false;
    shockWhenArmed: boolean = false;
    ultrasonicWhenArmed: boolean = false;
    isArmState: boolean = false;
    isSilentMode: boolean = false;
    isActiveAlarm: boolean = false;
    isLedOff: boolean = false;
    hasPendingFuelCutCommand: boolean = false;
    isFuelCutOn: boolean = false;
    isPanicMode: boolean = false;
    isSirenOn: boolean = false;
    isInWorkshopMode: boolean = false;
}