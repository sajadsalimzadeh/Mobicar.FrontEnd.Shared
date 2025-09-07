import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {QueryResult} from '../contracts/response';
import {appSettings} from '../app';
import {TripRequest, TripResponse} from '../contracts/report';

@Injectable({
    providedIn: 'root'
})
export class ReportRepository {

    constructor(private http: HttpClient) {
    }

    getTrip(req: TripRequest) {
        return this.http.post<QueryResult<TripResponse[]>>(`${appSettings.urls.api}/Report/GetTripV2`, req)
    }
}
