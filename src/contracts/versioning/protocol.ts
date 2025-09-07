import { FullEntity } from "@framework/contracts"
import { DeviceVersioningPolicy } from "../policy"
import { EnumUtil } from "@framework/utils"

export interface FirmwareProtocol {
    id: string
    FirmwareId: string
    Firmware: string
    vehicleProtocolVersionId: string
    vehicleProtocolVersion: string
}

export interface VehicleProtocolVersion {
    id: string
    version: string
    description: string
    dirPath: string
    lastUpdated: string
    file: string
    ignore: boolean
    vehicleProtocolCodecId: string
    vehicleProtocolCodec: string
    firmwareProtocols: FirmwareProtocol[]
    deviceStateIds: string[]
    stateFlowIds: string[]
    deviceIds: string[]
    fromDateFirmware: string
    toDateFirmware: string
    companyId: string
    carId: string
    updateDatabase: boolean
}

export interface VehicleProtocolCodec {
    id: string
    name: string
    description: string
    vehicleProtocolVersions: VehicleProtocolVersion[]
    Firmwares: string[]
}

export interface Protocol extends FullEntity {
    version: string
    description: string
    format: ProtocolFormat;
    contentFilename: string;
    companyCodes: string[];
    policies: DeviceVersioningPolicy[];
}

export interface ProtocolSaveRequest {
    id:any
    version: string
    description: string
    companyCodes: string[]
    policies: DeviceVersioningPolicy[]
}

export enum ProtocolFormat {
    V1 = 1,
    V2 = 2,
}

export const ProtocolFormats = EnumUtil.getObject(ProtocolFormat);

export const ProtocolFormatLabels: any = {
    [ProtocolFormat.V1]: 'V1',
    [ProtocolFormat.V2]: 'V2',
}

export const ProtocolFormatOptions = [
    { name: ProtocolFormatLabels[ProtocolFormat.V1], value: ProtocolFormat.V1 },
    { name: ProtocolFormatLabels[ProtocolFormat.V2], value: ProtocolFormat.V2 },
]