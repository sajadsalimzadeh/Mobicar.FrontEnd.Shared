import { Injectable, Injector } from '@angular/core';
import { Screen, ScreenSaveRequest } from '../../contracts/screen';
import { appSettings } from '../../app';
import { BaseCrudRepository } from "@framework/repositories";


@Injectable({
    providedIn: 'root'
})
export class ScreenRepository extends BaseCrudRepository<Screen, ScreenSaveRequest> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Screens');
    }
}

