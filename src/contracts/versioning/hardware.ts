import { FullEntity } from "@framework/contracts"
import { EnumUtil } from "@framework/utils";

export enum HardwareType {
    Dongle = 1,
    Tracker = 2,
}

export const HardwareTypes = EnumUtil.getObject(HardwareType);

export interface Hardware extends FullEntity {
    version: string;
    description: string;
    price: number;
    loanedPrice: number;
    type: HardwareType;
    accessibility: string[]
}

export interface HardwareSaveRequest {
    id: any
    version: string
    description: string;
    price: number;
    loanedPrice: number;
    type: HardwareType
    accessibility: string[]
}

export const HardwareTypeLabels: any = {
    [HardwareType.Dongle]: 'Dongle',
    [HardwareType.Tracker]: 'Tracker',
}

export const HardwareTypeOptions = [
    { key: HardwareType.Dongle, value: 'Dongle' },
    { key: HardwareType.Tracker, value: 'Tracker' },
]

export interface HardwareDto {
    id: string;
    version: string;
    description: string;
    price: number;
    loanedPrice: number;
    type: HardwareType;
    accessibility: string[]
}

