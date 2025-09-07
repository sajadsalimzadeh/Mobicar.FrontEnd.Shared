import {Injectable, Injector} from '@angular/core';
import {QueryResult} from '@framework/contracts';
import {SalePackage, SalePackageSaveRequest} from '../../contracts/sale/sale-package';
import { BASE_URL_SHARED } from "../../config";
import {BaseCrudRepository} from "@framework/repositories";

@Injectable({
    providedIn: 'root'
})
export class SalePackageRepository extends BaseCrudRepository<SalePackage, SalePackageSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'SalePackages');
    }

    enable(id: string) {
        return this.http.post<QueryResult<SalePackage>>(`${id}/Enable`, null);
    }

    disable(id: string) {
        return this.http.post<QueryResult<SalePackage>>(`${id}/Disable`, null);
    }
}
