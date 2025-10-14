import { Injectable, Injector } from "@angular/core";
import { BaseApiRepository } from "@framework/repositories";
import { BASE_URL_DATA } from "../config";
import { QueryResult } from "@framework/contracts";
import { Alarm } from "@data/contracts/alarm";
import { Dynamic, DynamicType } from "@data/contracts/dynamic";
import { ThirdPartyData } from "@data/contracts/third-party-data";
import { Diagnostic } from "@data/contracts/diagnostic";
import { Trip } from "@data/contracts/trip";
import { TripLocation } from "@data/contracts/trip-location";
import { TripMotion } from "@data/contracts/trip-motion";
import { TripSensor } from "@data/contracts/trip-sensor";
import { TripParameter } from "@data/contracts/trip-parameter";

@Injectable({
    providedIn: 'root'
})
export class ReportRepository extends BaseApiRepository {
    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_DATA), 'Report');
    }

    //===================== Device =====================\\
    getAllAlarmByDeviceId(deviceId: string, from: string, to: string) {
        return this.http.get<QueryResult<Alarm>>(`ByDeviceId/${deviceId}/Alarms`, {
            params: {
                from: from,
                to: to
            }
        });
    }

    getAllDynamicsByDeviceId(deviceId: string, type: DynamicType, from: string, to: string) {
        return this.http.get<QueryResult<Dynamic>>(`ByDeviceId/${deviceId}/Dynamics`, {
            params: {
                type: type,
                from: from,
                to: to
            }
        });
    }

    getAllThirdPartyDataByDeviceId(deviceId: string, from: string, to: string) {
        return this.http.get<QueryResult<ThirdPartyData>>(`ByDeviceId/${deviceId}/ThirdPartyDatas`, {
            params: {
                from: from,
                to: to
            }
        });
    }

    getAllDiagnosticByDeviceId(deviceId: string, from: string, to: string) {
        return this.http.get<QueryResult<Diagnostic[]>>(`ByDeviceId/${deviceId}/Diagnostics`, {
            params: {
                from: from,
                to: to
            }
        });
    }

    getAllTripByDeviceId(deviceId: string, from: string, to: string) {
        return this.http.get<QueryResult<Trip>>(`ByDeviceId/${deviceId}/Trips`, {
            params: {
                from: from,
                to: to
            }
        });
    }

    getAllLocationByDeviceId(deviceId: string, from: string, to: string) {
        return this.http.get<QueryResult<TripLocation>>(`ByDeviceId/${deviceId}/TripLocations`, {
            params: {
                from: from,
                to: to
            }
        });
    }

    getAllMotionByDeviceId(deviceId: string, from: string, to: string) {
        return this.http.get<QueryResult<TripMotion>>(`ByDeviceId/${deviceId}/TripMotions`, {
            params: {
                from: from,
                to: to
            }
        });
    }

    getAllSensorByDeviceId(deviceId: string, from: string, to: string) {
        return this.http.get<QueryResult<TripSensor>>(`ByDeviceId/${deviceId}/TripSensors`, {
            params: {
                from: from,
                to: to
            }
        });
    }

    getAllParameterByDeviceId(deviceId: string, from: string, to: string) {
        return this.http.get<QueryResult<TripParameter>>(`ByDeviceId/${deviceId}/TripParameters`, {
            params: {
                from: from,
                to: to
            }
        });
    }

    //===================== Vehicle =====================\\
    getAllAlarmByVehicleId(vehicleId: string, from: string, to: string) {
        return this.http.get<QueryResult<Alarm>>(`ByVehicleId/${vehicleId}/Alarms`, {
            params: {
                from: from,
                to: to
            }
        });
    }

    getAllThirdPartyDataByVehicleId(vehicleId: string, from: string, to: string) {
        return this.http.get<QueryResult<ThirdPartyData>>(`ByVehicleId/${vehicleId}/ThirdPartyDatas`, {
            params: {
                from: from,
                to: to
            }
        });
    }

    getAllDiagnosticByVehicleId(vehicleId: string, from: string, to: string) {
        return this.http.get<QueryResult<Diagnostic[]>>(`ByVehicleId/${vehicleId}/Diagnostics`, {
            params: {
                from: from,
                to: to
            }
        });
    }

    getAllTripByVehicleId(vehicleId: string, from: string, to: string) {
        return this.http.get<QueryResult<Trip>>(`ByVehicleId/${vehicleId}/Trips`, {
            params: {
                from: from,
                to: to
            }
        });
    }

    getAllLocationByVehicleId(vehicleId: string, from: string, to: string) {
        return this.http.get<QueryResult<TripLocation>>(`ByVehicleId/${vehicleId}/TripLocations`, {
            params: {
                from: from,
                to: to
            }
        });
    }

    getAllMotionByVehicleId(vehicleId: string, from: string, to: string) {
        return this.http.get<QueryResult<TripMotion>>(`ByVehicleId/${vehicleId}/TripMotions`, {
            params: {
                from: from,
                to: to
            }
        });
    }

    getAllParameterByVehicleId(vehicleId: string, from: string, to: string) {
        return this.http.get<QueryResult<TripParameter>>(`ByVehicleId/${vehicleId}/TripParameters`, {
            params: {
                from: from,
                to: to
            }
        });
    }

    getAllSensorByVehicleId(vehicleId: string, from: string, to: string) {
        return this.http.get<QueryResult<TripSensor>>(`ByVehicleId/${vehicleId}/TripSensors`, {
            params: {
                from: from,
                to: to
            }
        });
    }
}