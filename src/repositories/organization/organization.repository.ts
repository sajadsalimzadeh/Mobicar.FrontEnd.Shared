import { Injectable, Injector } from '@angular/core';
import { Organization } from '../../contracts/organization/organization';
import { BASE_URL_SHARED } from "../../config";
import { BaseCrudRepository } from "@framework/repositories";
import { QueryResult } from '@framework/contracts';
import { Server } from '@shared/contracts/organization/server';

@Injectable({
    providedIn: 'root'
})
export class OrganizationRepository extends BaseCrudRepository<Organization> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Organizations');
    }

    getAllServer(id: any) {
        return this.http.get<QueryResult<Server[]>>(`${id}/Servers`)
    }

}