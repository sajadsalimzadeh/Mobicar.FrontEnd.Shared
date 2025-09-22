import { Injectable, Injector } from "@angular/core";
import { BASE_URL_SHARED } from "../config";
import { UnknwonDtcDto } from "@shared/contracts/diag/diag";
import { PagedListResult, QueryResult } from "@framework/contracts";
import { BaseApiRepository } from "@framework/repositories";
import { DiagDtcTranslateRequest, DiagDtcTranslateResponse } from "@shared/contracts/diag/translate";

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

    dtcTranslate(req: DiagDtcTranslateRequest) {
        return this.http.post<QueryResult<DiagDtcTranslateResponse[]>>(`Dtcs/Translate`, req);
    }
}