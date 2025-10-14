import { Injectable, Injector } from '@angular/core';
import { AntiTheft, AntiTheftSaveRequest } from '../../contracts/anti-theft';
import { BaseCrudRepository } from '@framework/repositories';
import { BASE_URL_SHARED } from '../../config';


@Injectable({
    providedIn: 'root'
})
export class AntiTheftRepository  extends BaseCrudRepository<AntiTheft, AntiTheftSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'AntiThefts');
    }

}

