import {Injectable, Injector} from '@angular/core';
import {appSettings} from '../app';
import {BaseCrudRepository} from "@framework/repositories";;
import { Claim, ClaimSaveRequest } from '@shared/contracts/claim';


@Injectable({
    providedIn: 'root'
})
export class ClaimRepository extends BaseCrudRepository<Claim, ClaimSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Workflows');
    }
}

