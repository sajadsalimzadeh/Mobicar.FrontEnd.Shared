import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
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
import {appSettings} from '../app';

@Injectable({providedIn: 'root'})
export class ReportRepository {

    constructor(private http: HttpClient) {
    }

    getSaleDevice(req: { period: ReportPeriodType }) {
        return this.http.get<QueryResult<ReportGetAgentSaleDeviceResponse>>(`assets/api/sale-device-${req.period}.json`, {params: req});
    }

    getAllSalgePackageCount(req: { period: ReportPeriodType }) {
        return this.http.get<QueryResult<ReportGetAgentSalePackageResponse[]>>('assets/api/report-get-sale-package-count.json', {params: req});
    }

    getTrip(req: TripRequest) {
        return this.http.post<QueryResult<TripResponse[]>>(`${injector.get(BASE_URL_SHARED)}/Report/GetTripV2`, req)
    }

    getTripLocation(req: TripParametersRequest) {
        return this.http.post<QueryResult<TripLocationResponse[]>>(`${injector.get(BASE_URL_SHARED)}/Report/GetTripLocations`, req)
    }

    getTripAlarmEvents(req: TripParametersRequest) {
        return this.http.post<QueryResult<TripAlarmResponse[]>>(`${injector.get(BASE_URL_SHARED)}/Report/GetTripAlarmEvents`, req)
    }

    getTripParameters(req: TripParametersRequest) {
        return this.http.post<QueryResult<TripParametersResponse[]>>(`${injector.get(BASE_URL_SHARED)}/Report/GetTripParameters`, req)
    }

    getTripSensors(req: TripParametersRequest) {
        return this.http.post<QueryResult<TripSensorsResponse[]>>(`${injector.get(BASE_URL_SHARED)}/Report/GetTripSensors`, req)
    }


    getTripCommands(req: TripParametersRequest) {
        return this.http.post<QueryResult<TripCommandsResponse[]>>(`${injector.get(BASE_URL_SHARED)}/Report/GetTripCommands`, req)
    }

    getTripMotions(req: TripParametersRequest) {
        return this.http.post<QueryResult<TripMotionsResponse[]>>(`${injector.get(BASE_URL_SHARED)}/Report/GetTripMotions`, req)
    }

    getLocation(req: LocationRequest) {
        return this.http.post<QueryResult<LocationReponse[]>>(`${injector.get(BASE_URL_SHARED)}/Report/GetLocation`, req)

    }

}
