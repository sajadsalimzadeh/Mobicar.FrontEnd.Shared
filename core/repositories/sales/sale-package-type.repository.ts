import {Injectable, Injector} from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import {BaseCrudRepository} from "@framework/repositories";
import { SalePackageType, SalePackageTypeSaveRequest } from '../../contracts/sale/sale-package';


@Injectable({
    providedIn: 'root'
})
export class SalePackageTypeRepository extends BaseCrudRepository<SalePackageType, SalePackageTypeSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'SalePackageTypes');
    }
}
