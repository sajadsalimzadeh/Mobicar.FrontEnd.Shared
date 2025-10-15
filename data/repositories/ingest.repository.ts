import { Injectable, Injector } from "@angular/core";
import { BaseApiRepository } from "@framework/repositories";
import { BASE_URL_DATA } from "../config";
import {
    IngestAlarmRequest,
    IngestAntiTheftStatusRequest,
    IngestBatteryTestRequest,
    IngestThirdPartyDataRequest,
    IngestDiagnosticRequest,
    IngestLocationRequest,
    IngestMotionRequest,
    IngestParameterRequest,
    IngestRequest,
    IngestSensorRequest,
    IngestTripRequest
} from "../contracts/ingest";
import { CommandResult } from "@framework/contracts";

@Injectable({
    providedIn: 'root'
})
export class IngestRepository extends BaseApiRepository {
    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_DATA), 'Ingest');
    }

    ingest(deviceId: string, vehicleId: string | null, req: IngestRequest[]) {
        return this.http.post<CommandResult>(`${deviceId}${vehicleId ? '/' + vehicleId : ''}`, req);
    }

    ingestAlarm(deviceId: string, vehicleId: string | null, req: IngestAlarmRequest[]) {
        return this.http.post<CommandResult>(`${deviceId}${vehicleId ? '/' + vehicleId : ''}/Alarms`, req);
    }

    ingestAntiTheftStatus(deviceId: string, vehicleId: string | null, req: IngestAntiTheftStatusRequest[]) {
        return this.http.post<CommandResult>(`${deviceId}${vehicleId ? '/' + vehicleId : ''}/AntiTheftStatuses`, req);
    }

    ingestBatteryTest(deviceId: string, vehicleId: string | null, req: IngestBatteryTestRequest[]) {
        return this.http.post<CommandResult>(`${deviceId}${vehicleId ? '/' + vehicleId : ''}/BatteryTests`, req);
    }

    ingestThirdPartyData(deviceId: string, vehicleId: string | null, req: IngestThirdPartyDataRequest[]) {
        return this.http.post<CommandResult>(`${deviceId}${vehicleId ? '/' + vehicleId : ''}/ThirdPartyDatas`, req);
    }

    ingestDiagnostic(deviceId: string, vehicleId: string | null, req: IngestDiagnosticRequest[]) {
        return this.http.post<CommandResult>(`${deviceId}${vehicleId ? '/' + vehicleId : ''}/Diagnostics`, req);
    }

    ingestLocation(deviceId: string, vehicleId: string | null, req: IngestLocationRequest[]) {
        return this.http.post<CommandResult>(`${deviceId}${vehicleId ? '/' + vehicleId : ''}/Locations`, req);
    }

    ingestMotion(deviceId: string, vehicleId: string | null, req: IngestMotionRequest[]) {
        return this.http.post<CommandResult>(`${deviceId}${vehicleId ? '/' + vehicleId : ''}/Motions`, req);
    }

    ingestParameter(deviceId: string, vehicleId: string | null, req: IngestParameterRequest[]) {
        return this.http.post<CommandResult>(`${deviceId}${vehicleId ? '/' + vehicleId : ''}/Parameters`, req);
    }

    ingestTrip(deviceId: string, vehicleId: string | null, req: IngestTripRequest[]) {
        return this.http.post<CommandResult>(`${deviceId}${vehicleId ? '/' + vehicleId : ''}/Trips`, req);
    }

    ingestSensor(deviceId: string, vehicleId: string | null, req: IngestSensorRequest[]) {
        return this.http.post<CommandResult>(`${deviceId}${vehicleId ? '/' + vehicleId : ''}/Sensors`, req);
    }
}