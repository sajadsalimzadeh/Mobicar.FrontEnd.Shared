import { FullEntity } from "@framework/contracts"
import { Firmware } from "../versioning/firmware";
import { TrackerConfig } from "../device/tracker-config"
import { Server } from "@app/contracts/organization/server";

export interface Organization extends FullEntity {
    name: string
    logoFilename: string
    description: string
    defaultDataServerId: string
    defaultFirmwareId: string
    contacts: OrganizationContact[];
    trackerConfig: TrackerConfig;
    isDefault: boolean;

    defaultFirmware: Firmware;
    defaultDataServer: Server;
}


export interface OrganizationContact {
    name: string
    email: string
    phoneNumber: string
}