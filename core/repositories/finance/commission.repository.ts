
import { Injectable, Injector } from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import { Commission } from '@core/contracts/finance/commission';
import { CommandResult, QueryResult } from '@framework/contracts';
import { BaseCrudRepository } from '@framework/repositories';


@Injectable({
    providedIn: 'root'
})
export class CommissionRepository extends BaseCrudRepository<Commission> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Commissions');
    }

    getAllOwn() {
        return this.http.get<QueryResult<Commission[]>>(`Own`);
    }

    clear(id: string) {
        return this.http.post<CommandResult>(`${id}/Clear`, {});
    }
}
