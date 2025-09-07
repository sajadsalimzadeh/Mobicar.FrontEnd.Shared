import {Injectable, Injector} from '@angular/core';
import {appSettings} from '../app';
import {BaseCrudRepository} from "@framework/repositories";

@Injectable({
    providedIn: 'root'
})
export class VehicleRepository extends BaseCrudRepository<any, any> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Vehicles');
    }

}
