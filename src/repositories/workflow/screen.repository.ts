import { Injectable, Injector } from '@angular/core';
import { Screen, ScreenSaveRequest } from '../../contracts/screen';
import { BASE_URL_SHARED } from "../../config";
import { BaseCrudRepository } from "@framework/repositories";


@Injectable({
    providedIn: 'root'
})
export class ScreenRepository extends BaseCrudRepository<Screen, ScreenSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Screens');
    }
}

