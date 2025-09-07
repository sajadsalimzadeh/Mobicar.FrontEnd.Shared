import { Injectable, Injector } from '@angular/core';
import { Organization } from '../../contracts/organization/organization';
import { appSettings } from '../../app';
import { BaseCrudRepository } from "@framework/repositories";
import { QueryResult } from '@framework/contracts';
import { Server } from '@app/contracts/organization/server';

@Injectable({
    providedIn: 'root'
})
export class OrganizationRepository extends BaseCrudRepository<Organization> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Organizations');
    }

    getAllServer(id: any) {
        return this.http.get<QueryResult<Server[]>>(`${id}/Servers`)
    }

}