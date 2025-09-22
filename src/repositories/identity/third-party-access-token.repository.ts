import { Injectable, Injector } from '@angular/core';
import { QueryResult } from '@framework/contracts/results';
import { BaseApiRepository } from '@framework/repositories/base-api.repository';
import { ThirdPartyAccessToken, ThirdPartyAccessTokenGetRequest } from '../../contracts/identity/third-party';
import { BASE_URL_SHARED } from '../../config';

@Injectable({ providedIn: 'root' })
export class ThirdPartyAccessTokenRepository extends BaseApiRepository {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'ThirdPartyAccessTokens');
    }

    create(name: string, options?: ThirdPartyAccessTokenGetRequest) {
        return this.http.post<QueryResult<ThirdPartyAccessToken>>(`ByThirdPartyName/${name}/Own`, { ...options })
    }
}
