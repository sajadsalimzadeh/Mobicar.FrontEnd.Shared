import { Injectable, Injector } from '@angular/core';
import { appSettings } from '../../app';
import { BaseCrudRepository } from "@framework/repositories";
import { Credit } from "@app/contracts/finance/credit";
import { QueryResult } from '@framework/contracts';

@Injectable({
    providedIn: 'root'
})
export class CreditRepository extends BaseCrudRepository<Credit> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Credits');
    }

    getAllOwn() {
        return this.http.get<QueryResult<Credit[]>>(`Own`);
    }
}
