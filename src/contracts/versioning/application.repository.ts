import {Injectable, Injector} from '@angular/core';
import {appSettings} from '../../app';
import {BaseCrudRepository} from "@framework/repositories";
import { ApplicationVersion, ApplicationVersionSaveRequest } from '@shared/contracts/versioning/application';


@Injectable({
    providedIn: 'root'
})
export class ApplicationRepository extends BaseCrudRepository<ApplicationVersion, ApplicationVersionSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Applications');
    }
}

