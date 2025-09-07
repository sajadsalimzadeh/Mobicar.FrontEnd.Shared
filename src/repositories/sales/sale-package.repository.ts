import {Injectable, Injector} from '@angular/core';
import {QueryResult} from '@framework/contracts';
import {SalePackage, SalePackageSaveRequest} from '../../contracts/sale/sale-package';
import {appSettings} from '../../app';
import {BaseCrudRepository} from "@framework/repositories";

@Injectable({
    providedIn: 'root'
})
export class SalePackageRepository extends BaseCrudRepository<SalePackage, SalePackageSaveRequest> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'SalePackages');
    }

    enable(id: string) {
        return this.http.post<QueryResult<SalePackage>>(`${appSettings.urls.api}/SalePackages/${id}/Enable`, null);
    }

    disable(id: string) {
        return this.http.post<QueryResult<SalePackage>>(`${appSettings.urls.api}/SalePackages/${id}/Disable`, null);
    }
}
