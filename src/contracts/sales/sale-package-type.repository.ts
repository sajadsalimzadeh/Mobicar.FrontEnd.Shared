import {Injectable, Injector} from '@angular/core';
import {appSettings} from '../../app';
import {BaseCrudRepository} from "@framework/repositories";
import { SalePackageType, SalePackageTypeSaveRequest } from '@shared/contracts/sale/sale-package';


@Injectable({
    providedIn: 'root'
})
export class SalePackageTypeRepository extends BaseCrudRepository<SalePackageType, SalePackageTypeSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'SalePackageTypes');
    }
}
