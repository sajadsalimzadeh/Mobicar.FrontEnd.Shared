import { Injectable, Injector } from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import { BaseCrudRepository } from "@framework/repositories";
import { Credit } from "@shared/contracts/finance/credit";
import { QueryResult } from '@framework/contracts';

@Injectable({
    providedIn: 'root'
})
export class CreditRepository extends BaseCrudRepository<Credit> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Credits');
    }

    getAllOwn() {
        return this.http.get<QueryResult<Credit[]>>(`Own`);
    }
}
