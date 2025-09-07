import { Injectable, Injector } from '@angular/core';
import { appSettings } from '../../app';
import { BaseCrudRepository } from "@framework/repositories";
import { DeviceGroup, DeviceGroupSaveRequest } from '@app/contracts/device/device-group';


@Injectable({
    providedIn: 'root'
})
export class DeviceGroupRepository extends BaseCrudRepository<DeviceGroup, DeviceGroupSaveRequest> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'DeviceGroups');
    }

}

