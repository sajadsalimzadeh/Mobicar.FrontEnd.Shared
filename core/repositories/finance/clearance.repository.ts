
import { Injectable, Injector } from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import { Clearance, ClearanceAddRequest, ClearancePayRequest } from '@core/contracts/finance/clearance';
import { Withdraw } from '@core/contracts/finance/withdraw';
import { QueryResult } from '@framework/contracts';
import { BaseApiRepository } from '@framework/repositories';


@Injectable({
    providedIn: 'root'
})
export class ClearanceRepository extends BaseApiRepository {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Clearances');
    }

    getAll() {
        return this.http.get<QueryResult<Clearance[]>>('');
    }

    add(req: ClearanceAddRequest) {
        return this.http.post<QueryResult<Clearance>>('', req);
    }

    cancel(id: string) {
        return this.http.post<QueryResult<Clearance>>(`${id}/Cancel`, {});
    }

    pay(id: string, req: ClearancePayRequest) {
        return this.http.post<QueryResult<Clearance>>(`${id}/Pay`, req);
    }

    getAllWithdraw(id: string) {
        return this.http.get<QueryResult<Withdraw[]>>(`${id}/Withdraws`);
    }
}
