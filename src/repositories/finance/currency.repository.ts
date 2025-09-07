import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { appSettings } from "@app/app";
import { Currency } from "@app/contracts/finance/wallet";
import { QueryResult } from "@framework/contracts";
import { BaseApiRepository } from "@framework/repositories";

@Injectable({
    providedIn: 'root'
})
export class CurrencyRepository extends BaseApiRepository {
    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Currencies');
    }

    getAll() {
        return this.http.get<QueryResult<Currency[]>>(``);
    }
}