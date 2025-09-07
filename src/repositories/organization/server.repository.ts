import { Injectable, Injector } from '@angular/core';
import { appSettings } from '../../app';
import { BaseCrudRepository } from "@framework/repositories";
import { Server, ServerSaveRequest } from '@app/contracts/organization/server';


@Injectable({
    providedIn: 'root'
})
export class ServerRepository extends BaseCrudRepository<Server, ServerSaveRequest> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Servers');
    }
}

