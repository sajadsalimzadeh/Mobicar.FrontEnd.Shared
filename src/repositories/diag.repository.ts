import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { appSettings } from "@app/app";
import { UnknwonDtcDto } from "@app/contracts/diag/diag";
import { PagedListResult } from "@framework/contracts";
import { BaseApiRepository } from "@framework/repositories";

@Injectable({
    providedIn: 'root'
})
export class DiagRepository extends BaseApiRepository {
    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Diag');
    }

    getAllUnknownDtc() {
        return this.http.get<PagedListResult<UnknwonDtcDto>>('Dtcs/Unknowns');
    }
}