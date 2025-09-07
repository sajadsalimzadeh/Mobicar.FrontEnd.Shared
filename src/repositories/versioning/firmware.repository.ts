import { Injectable, Injector } from '@angular/core';
import { appSettings } from '../../app';
import { BaseCrudRepository } from "@framework/repositories";
import { Firmware, FirmwareSaveRequest } from '@app/contracts/versioning/firmware';


@Injectable({
    providedIn: 'root'
})
export class FirmwareRepository extends BaseCrudRepository<Firmware, FirmwareSaveRequest> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Firmwares');
    }

}

