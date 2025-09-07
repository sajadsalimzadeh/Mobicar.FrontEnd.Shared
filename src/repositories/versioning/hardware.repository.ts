import {Injectable, Injector} from '@angular/core';
import {appSettings} from '../../app';
import {BaseCrudRepository} from "@framework/repositories";
import { Hardware, HardwareSaveRequest } from '@app/contracts/versioning/hardware';


@Injectable({
    providedIn: 'root'
})
export class HardwareRepository extends BaseCrudRepository<Hardware, HardwareSaveRequest> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Hardwares');
    }

}

