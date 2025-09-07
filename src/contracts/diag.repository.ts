import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { BASE_URL_SHARED } from "../../config";
import { UnknwonDtcDto } from "@shared/contracts/diag/diag";
import { PagedListResult } from "@framework/contracts";
import { BaseApiRepository } from "@framework/repositories";

@Injectable({
    providedIn: 'root'
})
export class DiagRepository extends BaseApiRepository {
    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Diag');
    }

    getAllUnknownDtc() {
        return this.http.get<PagedListResult<UnknwonDtcDto>>('Dtcs/Unknowns');
    }
}