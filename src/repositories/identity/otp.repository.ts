import { Injectable, Injector } from '@angular/core';
import { BaseApiRepository } from "@framework/repositories";
import { appSettings } from "../../app";
import { CommandResult, QueryResult } from "@framework/contracts";
import { Otp, OtpSendRequest } from "@app/contracts/identity/otp";

@Injectable({ providedIn: 'root' })

export class OtpRepository extends BaseApiRepository {
    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Otps');
    }

    send(req: OtpSendRequest) {
        return this.http.post<CommandResult>('', req);
    }

    getAll() {
        return this.http.get<QueryResult<Otp[]>>('')
    }
}
