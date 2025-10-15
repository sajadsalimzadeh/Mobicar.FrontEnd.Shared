import { LiveDtoToken } from "../contracts/live";
import { Injectable, Injector } from "@angular/core";
import { BASE_URL_DATA } from "../config";
import { QueryResult } from "@framework/contracts";
import { BaseApiRepository } from "@framework/repositories";

type EntityType = 'TripLocation' | 'TripParameter' | 'TripMotion' | 'ThirdPartyData' | 'Diagnostic' | 'Alarm' | 'Dynamic-AntiTheftStatus' | 'Dynamic-BatteryTest';

@Injectable({
    providedIn: 'root'
})
export class LiveRepository extends BaseApiRepository {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_DATA), 'Live');
    }

    createDeviceToken(deviceId: string, types: EntityType[], expireIn: number = 60) { //Minutes
        return this.http.post<QueryResult<LiveDtoToken[]>>(`Device/${deviceId}?expireIn=${expireIn}`, types);
    }

    createVehicleToken(vehicleId: string, types: EntityType[], expireIn: number = 60) { //Minutes
        return this.http.post<QueryResult<LiveDtoToken[]>>(`Vehicle/${vehicleId}?expireIn=${expireIn}`, types);
    }
}