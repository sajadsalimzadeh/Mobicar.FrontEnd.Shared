import {Injectable, Injector} from '@angular/core';
import {BaseCrudRepository} from "@framework/repositories";
import { Group, GroupSaveRequest } from '../../contracts/identity/group';
import { BASE_URL_SHARED } from '../../config';

@Injectable({providedIn: 'root'})
export class PrivilegeGroupRepository extends BaseCrudRepository<Group, GroupSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'PrivilegeGroups');
    }
}
