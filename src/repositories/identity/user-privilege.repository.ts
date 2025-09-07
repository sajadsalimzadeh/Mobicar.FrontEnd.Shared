import {Injectable, Injector} from '@angular/core';
import {BaseCrudRepository} from "@framework/repositories";
import {appSettings} from "@app/app";
import {UserPrivilege} from "@app/contracts/identity/user";

@Injectable({providedIn: 'root'})
export class UserPrivilegeRepository extends BaseCrudRepository<UserPrivilege, any> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'UserPrivileges');
    }
}
