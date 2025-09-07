import { Injectable, Injector } from '@angular/core';
import { AntiTheft, AntiTheftSaveRequest } from '@app/contracts/anti-theft';
import { BaseCrudRepository } from '@framework/repositories';
import { appSettings } from '@app/app';


@Injectable({
    providedIn: 'root'
})
export class AntiTheftRepository  extends BaseCrudRepository<AntiTheft, AntiTheftSaveRequest> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'AntiThefts');
    }

}

