
import { Injectable, Injector } from '@angular/core';
import { appSettings } from '@app/app';
import { BaseCrudRepository } from '@framework/repositories';
import { Bank } from '@app/contracts/finance/bank';


@Injectable({
    providedIn: 'root'
})
export class BankRepository extends BaseCrudRepository<Bank> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Banks');
    }
}
