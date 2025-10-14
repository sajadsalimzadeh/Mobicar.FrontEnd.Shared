import { Injectable, Injector } from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import { BaseCrudRepository } from "@framework/repositories";
import { Withdraw, WithdrawCancelRequest } from '../../contracts/finance/withdraw';
import { QueryResult } from '@framework/contracts';

@Injectable({
    providedIn: 'root'
})
    export class WithdrawRepository extends BaseCrudRepository<Withdraw> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Withdraws');
    }

    cancel(id: string, req: WithdrawCancelRequest) {
        return this.http.post<Withdraw>(`${id}/Cancel`, req);
    }

    getAllOwn() {
        return this.http.get<QueryResult<Withdraw[]>>('Own');
    }

    cancelOwn(id: string) {
        return this.http.post<Withdraw>(`Own/${id}/Cancel`, {});
    }
}
