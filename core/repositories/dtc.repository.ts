import { Injectable, Injector } from "@angular/core";
import { BASE_URL_SHARED } from "../config";
import { UnknwonDtcDto as DtcUnknwonDto } from "../contracts/unknown-dtc";
import { PagedListResult, QueryResult } from "@framework/contracts";
import { BaseApiRepository } from "@framework/repositories";
import { DtcTranslateRequest, DtcTranslateResponse } from "../contracts/dtc";

@Injectable({
    providedIn: 'root'
})
export class DtcRepository extends BaseApiRepository {
    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Dtcs');
    }

    getAllUnknown() {
        return this.http.get<PagedListResult<DtcUnknwonDto>>('Unknowns');
    }

    translate(req: DtcTranslateRequest, isSilent: boolean = false) {
        return this.http.post<QueryResult<DtcTranslateResponse[]>>(`Translate`, req, { headers: { message: isSilent ? 'disable' : 'enable' } });
    }
}