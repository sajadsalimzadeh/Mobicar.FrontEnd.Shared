import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { BASE_URL_SHARED } from "../../config";
import { Currency } from "@shared/contracts/finance/wallet";
import { QueryResult } from "@framework/contracts";
import { BaseApiRepository } from "@framework/repositories";

@Injectable({
    providedIn: 'root'
})
export class CurrencyRepository extends BaseApiRepository {
    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Currencies');
    }

    getAll() {
        return this.http.get<QueryResult<Currency[]>>(``);
    }
}