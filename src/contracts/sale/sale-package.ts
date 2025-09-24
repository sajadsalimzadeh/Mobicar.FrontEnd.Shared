import { FullEntity } from "@framework/contracts";
import { Privilege } from "../identity/access";
import { EnumUtil } from "@framework/utils";
import { Currency } from "../finance/wallet";
import { DeviceActivationSelector } from "../device/device-activation";

export interface SalePackageAccess {
    id: string;
    name: string;
    duration: number;
    privileges: Privilege[];
}

export interface SalePackageDeviceActivation {
    name?: string;
    duration?: number;
    selector: DeviceActivationSelector;
}

export interface SalePackageType extends FullEntity {
    name: string
}

export interface SalePackageTypeSaveRequest {
    id: any
    name: string
}

export enum SalePackageStatus {
    Disable = 0,
    Enable = 1
}

export const SalePackageStatuses = EnumUtil.getObject(SalePackageStatus);

export interface SalePackage {
    id: string;
    currencyId: string;
    thumbnailFilename: string;
    name: string;
    price: number;
    displayPrice: number;
    priceReferenceId?: string;
    typeId: string;
    isEnable: boolean;
    description: string;
    deviceActivationUserSelect: SalePackageDeviceActivationUserSelect;
    deviceActivations: SalePackageDeviceActivation[];
    privileges: SalePackageAccess[];

    type?: SalePackageType;
    currency?: Currency;
    priceReference?: SalePackage;
}

export interface SalePackageDeviceActivationUserSelect {
    isEnable: boolean;
    duration: number;
    count: number;
    companies: string[];
}

export interface SalePackageSaveRequest {
    id: any;
    thumbnail: string;
    name: string;
    price: number;
    displayPrice: number;
    type: SalePackageType;
    typeId: string;
    isEnable: boolean;
    description: string;
    deviceActivationUserSelect: SalePackageDeviceActivationUserSelect;
    deviceActivations: SalePackageDeviceActivation[];
    privileges: SalePackageAccess[];
}
