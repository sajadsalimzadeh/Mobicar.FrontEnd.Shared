import { Injectable, Injector } from '@angular/core';
import { BaseApiRepository } from "@framework/repositories";
import { QueryResult } from '@framework/contracts';
import { BASE_URL_SHARED } from '../../config';

@Injectable({ providedIn: 'root' })
export class TokenRepository extends BaseApiRepository {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Tokens')
    }

    terminate(id:any) {
        return this.http.delete<QueryResult>(`${id}/Terminate`)
    }

    terminateOwn(id: any) {
        return this.http.delete<QueryResult>(`Own/${id}/Terminate`)
    }
}
