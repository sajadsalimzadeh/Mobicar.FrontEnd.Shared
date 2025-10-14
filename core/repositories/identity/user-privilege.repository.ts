import {Injectable, Injector} from '@angular/core';
import {BaseCrudRepository} from "@framework/repositories";
import {UserPrivilege} from "../../contracts/identity/user";
import { BASE_URL_SHARED } from '../../config';

@Injectable({providedIn: 'root'})
export class UserPrivilegeRepository extends BaseCrudRepository<UserPrivilege, any> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'UserPrivileges');
    }
}
