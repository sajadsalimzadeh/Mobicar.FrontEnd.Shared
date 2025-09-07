import { Injectable, Injector } from '@angular/core';
import { appSettings } from '../../app';
import { BaseCrudRepository } from "@framework/repositories";
import { DeviceEncryptionType } from '@app/contracts/device/device-encryption-type';


@Injectable({
    providedIn: 'root'
})
export class DeviceEncryptionTypeRepository extends BaseCrudRepository<DeviceEncryptionType> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'DeviceEncryptionTypes');
    }

}

