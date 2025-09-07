import { CreateEntity } from "@framework/contracts";

export interface DeviceActivationSelector {
    protocolVersion?: string | null,
    companyCode?: string | null,
    ecuTypeCode?: string | null,
    vehicleTreePaths?: string[];

    dtcRead?: boolean;
    dtcDelete?: boolean;
    currentDataParameter?: boolean;
    infoParameter?: boolean;
    actuator?: boolean;
    addFunction?: boolean;
    download?: boolean;
}

export interface DeviceActivationPolicy extends CreateEntity {
    deviceId: string;
    name: string;
    expireTime?: string;
    selector: DeviceActivationSelector
}

export interface DeviceActivationPolicyWithCodesDto {
    id: string;
    deviceId: string;
    name: string;
    selector: DeviceActivationSelector;
    activations: DeviceActivationCode[];
}

export interface DeviceActivationCode {
    filename: string;
    code: string;
}