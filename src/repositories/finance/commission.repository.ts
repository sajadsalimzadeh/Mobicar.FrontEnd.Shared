
import { Injectable, Injector } from '@angular/core';
import { appSettings } from '@app/app';
import { Commission } from '@app/contracts/finance/commission';
import { CommandResult, QueryResult } from '@framework/contracts';
import { BaseCrudRepository } from '@framework/repositories';


@Injectable({
    providedIn: 'root'
})
export class CommissionRepository extends BaseCrudRepository<Commission> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Commissions');
    }

    getAllOwn() {
        return this.http.get<QueryResult<Commission[]>>(`Own`);
    }

    clear(id: string) {
        return this.http.post<CommandResult>(`${id}/Clear`, {});
    }
}
