import { Injectable, Injector } from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import { BaseCrudRepository } from "@framework/repositories";
import { Server, ServerSaveRequest } from '@shared/contracts/organization/server';


@Injectable({
    providedIn: 'root'
})
export class ServerRepository extends BaseCrudRepository<Server, ServerSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Servers');
    }
}

