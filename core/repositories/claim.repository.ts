import {Injectable, Injector} from '@angular/core';
import { BASE_URL_SHARED } from "../config";
import {BaseCrudRepository} from "@framework/repositories";;
import { Claim, ClaimSaveRequest } from '../contracts/claim';


@Injectable({
    providedIn: 'root'
})
export class ClaimRepository extends BaseCrudRepository<Claim, ClaimSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Workflows');
    }
}

