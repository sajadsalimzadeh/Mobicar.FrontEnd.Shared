import { FullEntity } from "@framework/contracts"
import { Claim } from "../claim"
import { DeviceConfig } from "./device-config"
import { DeviceEncryptionType } from "./device-encryption-type"
import { DeviceGroup } from "./device-group"
import { Firmware, FirmwareDto } from "../versioning/firmware"
import { Hardware, HardwareDto } from "../versioning/hardware"
import { Organization } from "../organization/organization"
import { Server } from "../organization/server"
import { User } from "../identity/user"
import { Vehicle } from "../vehicle"
import { WorkflowState } from "../workflow/workflow"


export interface Device extends FullEntity {
    serial: string;
    organizationId: string;
    hardwareId: string;
    groupId: string;
    encryptionTypeId: string;
    ownerId: string;
    firmwareId: string;
    workflowStateId: string;
    connectedVehicleId: string;
    dataServerId: string;
    microSerial: string;
    simNumber: string;
    isFirmwareForceUpdate: boolean;
    isFirmwareBetaAvailable: boolean;
    activationTime: string;
    configSyncTime: string;
    config: DeviceConfig;
    workflowStateClaims: Claim[];
    
    owner?: User;
    organization?: Organization;
    group?: DeviceGroup;
    encryptionType?: DeviceEncryptionType;
    hardware?: Hardware;
    firmware?: Firmware;
    workflowState?: WorkflowState;
    connectedVehicle?: Vehicle;
    dataServer?: Server;
}

export interface DeviceDto {
    id: string;
    serial: string;
    organizationId: string;
    hardwareId: string;
    groupId: string;
    encryptionTypeId: string;
    userId: string;

    hardware?: HardwareDto;
    firmware?: FirmwareDto;
}


export interface DeviceSaveRequest {
    id: any;
    serial: string;
    organizationId: string;
    hardwareId: string;
    groupId: string;
    encryptionTypeId: string;
    userId: string;
    firmwareId: string;
    workflowStateId: string;
    connectedVehicleId: string;
    dataServerId: string;
    microSerial: string;
    simNumber: string;
    isFirmwareForceUpdate: boolean;
    isFirmwareBetaAvailable: boolean;
    activationTime: string;
    configSyncTime: string;
    config: DeviceConfig;
    workflowStateClaims: Claim[];
}

export interface DeviceAddBulkRequest {
    serialPrefix: string;
    serialStart: string;
    serialEnd: string;

    organizationId: string;
    hardwareId: string;
    groupId: string;
    encryptionTypeId: string;

    firmwareId?: string;
    workflowStateId?: string;
    dataServerId?: string;
}

export interface DeviceSaveRequest {

}


