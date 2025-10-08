import { Injectable, Injector } from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import { BaseCrudRepository } from "@framework/repositories";
import { DeviceEncryptionType } from '@core/contracts/device/device-encryption-type';


@Injectable({
    providedIn: 'root'
})
export class DeviceEncryptionTypeRepository extends BaseCrudRepository<DeviceEncryptionType> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'DeviceEncryptionTypes');
    }

}

