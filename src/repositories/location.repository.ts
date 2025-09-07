import {Injectable, Injector} from '@angular/core';
import { BASE_URL_SHARED } from "../config";
import {BaseCrudRepository} from "@framework/repositories";
import { Location, LocationSaveRequest } from '@shared/contracts/location';


@Injectable({
    providedIn: 'root'
})
export class LocationRepository extends BaseCrudRepository<Location, LocationSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Locations');
    }

}

