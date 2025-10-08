import { Injectable, Injector } from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import { BaseCrudRepository } from "@framework/repositories";
import { BankInfo, BankInfoStatus } from "@core/contracts/finance/bank-info";
import { QueryResult } from '@framework/contracts';

@Injectable({
    providedIn: 'root'
})
export class BankInfoRepository extends BaseCrudRepository<BankInfo> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'BankInfos');
    }

    decide(id: string, status: BankInfoStatus) {
        return this.http.post<BankInfo>(`${id}/Decide`, { status });
    }

    getAllOwn() {
        return this.http.get<QueryResult<BankInfo[]>>('Own');
    }

    saveOwn(req: BankInfo) {
        if ((req as any).id) {
            return this.http.patch<QueryResult<BankInfo>>(`Own/${req.id}`, req);
        }
        delete (req as any).id;
        return this.http.post<QueryResult<BankInfo>>('Own', req);
    }
}
