import { BaseDataEntity } from "./entity";

export interface Trip extends BaseDataEntity {
    tripStart: string;
    tripEnd: string;
    averageFuelConsumption: number;
    totalFuelConsumption: number;
    totalDistanceEcu: number;
    totalDistanceGps: number;
    totalTimeEcu: number;
    totalTimeGps: number;
    averageSpeedEcu: number;
    averageSpeedGps: number;
    maxSpeedEcu: number;
    maxSpeedGps: number;
    idleTimeEcu: number;
    idleTimeGps: number;
}