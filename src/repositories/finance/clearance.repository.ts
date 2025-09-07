
import { Injectable, Injector } from '@angular/core';
import { appSettings } from '@app/app';
import { Clearance, ClearanceAddRequest, ClearancePayRequest } from '@app/contracts/finance/clearance';
import { Withdraw } from '@app/contracts/finance/withdraw';
import { QueryResult } from '@framework/contracts';
import { BaseApiRepository } from '@framework/repositories';


@Injectable({
    providedIn: 'root'
})
export class ClearanceRepository extends BaseApiRepository {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Clearances');
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
