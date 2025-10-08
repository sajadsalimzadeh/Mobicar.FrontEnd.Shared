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
        return this.http.get<QueryResult<Alarm>>(`ByDeviceId/${deviceId}/Alarms/${from}/${to}`);
    }

    getAllDynamicsByDeviceId(deviceId: string, type: DynamicType, from: string, to: string) {
        return this.http.get<QueryResult<Dynamic>>(`ByDeviceId/${deviceId}/Dynamics/${type}/${from}/${to}`);
    }

    getAllThirdPartyDataByDeviceId(deviceId: string, from: string, to: string) {
        return this.http.get<QueryResult<ThirdPartyData>>(`ByDeviceId/${deviceId}/ThirdPartyDatas/${from}/${to}`);
    }

    getAllDiagnosticByDeviceId(deviceId: string, from: string, to: string) {
        return this.http.get<QueryResult<Diagnostic[]>>(`ByDeviceId/${deviceId}/Diagnostics/${from}/${to}`);
    }

    getAllTripByDeviceId(deviceId: string, from: string, to: string) {
        return this.http.get<QueryResult<Trip>>(`ByDeviceId/${deviceId}/Trips/${from}/${to}`);
    }

    getAllLocationByDeviceId(deviceId: string, from: string, to: string) {
        return this.http.get<QueryResult<TripLocation>>(`ByDeviceId/${deviceId}/TripLocations/${from}/${to}`);
    }

    getAllMotionByDeviceId(deviceId: string, from: string, to: string) {
        return this.http.get<QueryResult<TripMotion>>(`ByDeviceId/${deviceId}/TripMotions/${from}/${to}`);
    }

    getAllSensorByDeviceId(deviceId: string, from: string, to: string) {
        return this.http.get<QueryResult<TripSensor>>(`ByDeviceId/${deviceId}/TripSensors/${from}/${to}`);
    }

    getAllParameterByDeviceId(deviceId: string, from: string, to: string) {
        return this.http.get<QueryResult<TripParameter>>(`ByDeviceId/${deviceId}/TripParameters/${from}/${to}`);
    }

    //===================== Vehicle =====================\\
    getAllAlarmByVehicleId(vehicleId: string, from: string, to: string) {
        return this.http.get<QueryResult<Alarm>>(`ByVehicleId/${vehicleId}/Alarms/${from}/${to}`);
    }

    getAllThirdPartyDataByVehicleId(vehicleId: string, from: string, to: string) {
        return this.http.get<QueryResult<ThirdPartyData>>(`ByVehicleId/${vehicleId}/ThirdPartyDatas/${from}/${to}`);
    }

    getAllDiagnosticByVehicleId(vehicleId: string, from: string, to: string) {
        return this.http.get<QueryResult<Diagnostic[]>>(`ByVehicleId/${vehicleId}/Diagnostics/${from}/${to}`);
    }

    getAllTripByVehicleId(vehicleId: string, from: string, to: string) {
        return this.http.get<QueryResult<Trip>>(`ByVehicleId/${vehicleId}/Trips/${from}/${to}`);
    }

    getAllLocationByVehicleId(vehicleId: string, from: string, to: string) {
        return this.http.get<QueryResult<TripLocation>>(`ByVehicleId/${vehicleId}/TripLocations/${from}/${to}`);
    }

    getAllMotionByVehicleId(vehicleId: string, from: string, to: string) {
        return this.http.get<QueryResult<TripMotion>>(`ByVehicleId/${vehicleId}/TripMotions/${from}/${to}`);
    }

    getAllParameterByVehicleId(vehicleId: string, from: string, to: string) {
        return this.http.get<QueryResult<TripParameter>>(`ByVehicleId/${vehicleId}/TripParameters/${from}/${to}`);
    }

    getAllSensorByVehicleId(vehicleId: string, from: string, to: string) {
        return this.http.get<QueryResult<TripSensor>>(`ByVehicleId/${vehicleId}/TripSensors/${from}/${to}`);
    }
}