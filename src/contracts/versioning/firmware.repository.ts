import { Injectable, Injector } from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import { BaseCrudRepository } from "@framework/repositories";
import { Firmware, FirmwareSaveRequest } from '@shared/contracts/versioning/firmware';


@Injectable({
    providedIn: 'root'
})
export class FirmwareRepository extends BaseCrudRepository<Firmware, FirmwareSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Firmwares');
    }

}

