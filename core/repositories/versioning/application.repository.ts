import {Injectable, Injector} from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import {BaseCrudRepository} from "@framework/repositories";
import { Application, ApplicationSaveRequest } from '../../contracts/versioning/application';


@Injectable({
    providedIn: 'root'
})
export class ApplicationRepository extends BaseCrudRepository<Application, ApplicationSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Applications');
    }
}

