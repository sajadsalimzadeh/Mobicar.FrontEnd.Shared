import { DateTime } from "@framework/utils";

export interface LocationDto {
    latitude?: number;
    longitude?: number;
    altitude?: number;
}

export interface BaseDataEntity {
    id: string;
    deviceId: string;
    vehicleId?: string;
    vehicleTreePath?: string;
    serial: string;
    timestamp: string;
    creationTime: string;
    location?: LocationDto;

    isEnded?: boolean;
}

export interface BaseDataEcuEntity extends BaseDataEntity {
    companyCode: string;
    ecuFilename: string;
}