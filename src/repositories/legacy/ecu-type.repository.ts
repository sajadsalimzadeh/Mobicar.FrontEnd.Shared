import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {QueryResult} from '@framework/contracts';
import {EcuType} from '../../contracts/ecu-type';


@Injectable({
    providedIn: 'root'
})
export class EcuTypeRepository {

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<QueryResult<EcuType[]>>('assets/api/ecu-type.json');
    }
}
