import { Injectable, Injector } from '@angular/core';
import { BaseApiRepository } from "@framework/repositories";
import { appSettings } from "../../app";
import { QueryResult } from '@framework/contracts';

@Injectable({ providedIn: 'root' })
export class TokenRepository extends BaseApiRepository {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Tokens')
    }

    terminate(id:any) {
        return this.http.delete<QueryResult>(`${id}/Terminate`)
    }

}
