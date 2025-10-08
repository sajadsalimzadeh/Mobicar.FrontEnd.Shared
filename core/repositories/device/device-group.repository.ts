import { Injectable, Injector } from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import { BaseCrudRepository } from "@framework/repositories";
import { DeviceGroup, DeviceGroupSaveRequest } from '@core/contracts/device/device-group';


@Injectable({
    providedIn: 'root'
})
export class DeviceGroupRepository extends BaseCrudRepository<DeviceGroup, DeviceGroupSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'DeviceGroups');
    }

}

