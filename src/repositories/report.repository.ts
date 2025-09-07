import {HttpClient} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {
    LocationReponse,
    LocationRequest,
    ReportGetAgentSaleDeviceResponse,
    ReportGetAgentSalePackageResponse,
    ReportPeriodType,
    TripAlarmResponse,
    TripCommandsResponse,
    TripLocationResponse,
    TripMotionsResponse,
    TripParametersRequest,
    TripParametersResponse,
    TripRequest,
    TripResponse,
    TripSensorsResponse
} from '../contracts/report';
import {QueryResult} from '@framework/contracts';
import { BASE_URL_SHARED } from "../config";
import { BaseApiRepository } from '@framework/repositories';

@Injectable({providedIn: 'root'})
export class ReportRepository extends BaseApiRepository {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Reports')
    }

    getSaleDevice(req: { period: ReportPeriodType }) {
        return this.http.get<QueryResult<ReportGetAgentSaleDeviceResponse>>(`assets/api/sale-device-${req.period}.json`, {params: req});
    }

    getAllSalgePackageCount(req: { period: ReportPeriodType }) {
        return this.http.get<QueryResult<ReportGetAgentSalePackageResponse[]>>('assets/api/report-get-sale-package-count.json', {params: req});
    }

    getTrip(req: TripRequest) {
        return this.http.post<QueryResult<TripResponse[]>>(`GetTripV2`, req)
    }

    getTripLocation(req: TripParametersRequest) {
        return this.http.post<QueryResult<TripLocationResponse[]>>(`GetTripLocations`, req)
    }

    getTripAlarmEvents(req: TripParametersRequest) {
        return this.http.post<QueryResult<TripAlarmResponse[]>>(`GetTripAlarmEvents`, req)
    }

    getTripParameters(req: TripParametersRequest) {
        return this.http.post<QueryResult<TripParametersResponse[]>>(`GetTripParameters`, req)
    }

    getTripSensors(req: TripParametersRequest) {
        return this.http.post<QueryResult<TripSensorsResponse[]>>(`GetTripSensors`, req)
    }


    getTripCommands(req: TripParametersRequest) {
        return this.http.post<QueryResult<TripCommandsResponse[]>>(`GetTripCommands`, req)
    }

    getTripMotions(req: TripParametersRequest) {
        return this.http.post<QueryResult<TripMotionsResponse[]>>(`GetTripMotions`, req)
    }

    getLocation(req: LocationRequest) {
        return this.http.post<QueryResult<LocationReponse[]>>(`GetLocation`, req)

    }

}
