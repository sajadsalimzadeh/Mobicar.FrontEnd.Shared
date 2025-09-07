import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {QueryResult} from '../contracts/response';
import { BASE_URL_SHARED } from "../config";
import {TripRequest, TripResponse} from '../contracts/report';

@Injectable({
    providedIn: 'root'
})
export class ReportRepository {

    constructor(private http: HttpClient) {
    }

    getTrip(req: TripRequest) {
        return this.http.post<QueryResult<TripResponse[]>>(`${injector.get(BASE_URL_SHARED)}/Report/GetTripV2`, req)
    }
}
