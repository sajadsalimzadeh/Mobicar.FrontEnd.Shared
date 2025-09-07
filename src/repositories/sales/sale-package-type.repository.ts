import {Injectable, Injector} from '@angular/core';
import {appSettings} from '../../app';
import {BaseCrudRepository} from "@framework/repositories";
import { SalePackageType, SalePackageTypeSaveRequest } from '@app/contracts/sale/sale-package';


@Injectable({
    providedIn: 'root'
})
export class SalePackageTypeRepository extends BaseCrudRepository<SalePackageType, SalePackageTypeSaveRequest> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'SalePackageTypes');
    }
}
