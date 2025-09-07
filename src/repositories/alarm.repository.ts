import { Injectable, Injector } from "@angular/core";
import { BaseCrudRepository } from "@framework/repositories";
import { AlaramSaveRequest, Alarm } from "@app/contracts/alarm";
import { appSettings } from "@app/app";

@Injectable({
    providedIn:'root'
})
export class AlaramRepository extends BaseCrudRepository<Alarm, AlaramSaveRequest> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Alarms');
    }
}