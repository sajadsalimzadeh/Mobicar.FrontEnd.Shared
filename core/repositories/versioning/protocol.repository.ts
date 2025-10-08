import {Injectable, Injector} from '@angular/core';
import {BaseCrudRepository} from "@framework/repositories";
import { Protocol, ProtocolSaveRequest } from '@core/contracts/versioning/protocol';
import { BASE_URL_SHARED } from "../../config";


@Injectable({
    providedIn: 'root'
})
export class ProtocolRepository extends BaseCrudRepository<Protocol, ProtocolSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Protocols');
    }

}

