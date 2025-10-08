import { Injectable, Injector } from "@angular/core";
import { BaseCrudRepository } from "@framework/repositories";
import { AlaramSaveRequest, Alarm } from "@core/contracts/alarm";
import { BASE_URL_SHARED } from "../config";

@Injectable({
    providedIn:'root'
})
export class AlaramRepository extends BaseCrudRepository<Alarm, AlaramSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Alarms');
    }
}