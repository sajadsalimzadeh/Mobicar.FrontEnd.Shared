import { Injectable, Injector } from '@angular/core';
import { BaseApiRepository } from "@framework/repositories";
import { CommandResult, QueryResult } from "@framework/contracts";
import { Otp, OtpSendRequest } from "@shared/contracts/identity/otp";
import { BASE_URL_SHARED } from '@shared/config';

@Injectable({ providedIn: 'root' })

export class OtpRepository extends BaseApiRepository {
    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Otps');
    }

    send(req: OtpSendRequest) {
        return this.http.post<CommandResult>('', req);
    }

    getAll() {
        return this.http.get<QueryResult<Otp[]>>('')
    }
}
