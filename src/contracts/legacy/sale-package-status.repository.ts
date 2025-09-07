import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {QueryResult} from '@framework/contracts';
import {SalePackageStatus} from '../../contracts/sale/sale-package';

@Injectable({
    providedIn: 'root'
})
export class SalePackageStatusRepository {

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<QueryResult<SalePackageStatus[]>>('assets/api/sale-package-status.json');
    }
}
