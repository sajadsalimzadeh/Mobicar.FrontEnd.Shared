import {Injectable, Injector} from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import {BaseCrudRepository} from "@framework/repositories";
import { Hardware, HardwareSaveRequest } from '@shared/contracts/versioning/hardware';


@Injectable({
    providedIn: 'root'
})
export class HardwareRepository extends BaseCrudRepository<Hardware, HardwareSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Hardwares');
    }

}

