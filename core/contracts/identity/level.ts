import { FullEntity } from "@framework/contracts";

export interface Level extends FullEntity {
    name: string;
    order: number;
    color: string;
    thumbnailFilename: string;
    description: string;
    maxNetworkLevel: number;
    maxCommissionAmount: number;
    personalCommission: number;
    networkCommission: number;
    clearanceDelayDuration: number;
    isDefault: boolean;

    upgradeConditions?: LevelConditions;
    downgradeConditions?: LevelConditions;
}

export interface LevelConditions {
    targetId?: string;
    days: number;
    personalCommissionAmount: number;
    networkCommissionAmount: number;
    networkMemberCount: number;
}
