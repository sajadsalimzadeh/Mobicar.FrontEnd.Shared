import { FullEntity } from "@framework/contracts"
import { HardwareType } from "../versioning/hardware"

export interface DeviceGroup extends FullEntity {
  name: string;
  price: number;
  hardwareType: HardwareType;
}

export interface DeviceGroupSaveRequest {
  id: any
  name: string
  hardwareType: HardwareType
  accessibility: string[]
}
