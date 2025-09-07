
import { Injectable, Injector } from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import { BaseCrudRepository } from '@framework/repositories';
import { Bank } from '@shared/contracts/finance/bank';


@Injectable({
    providedIn: 'root'
})
export class BankRepository extends BaseCrudRepository<Bank> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Banks');
    }
}
