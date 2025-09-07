import {Injectable, Injector} from '@angular/core';
import {BaseCrudRepository} from "@framework/repositories";
import { Protocol, ProtocolSaveRequest } from '@app/contracts/versioning/protocol';
import {appSettings} from '../../app';


@Injectable({
    providedIn: 'root'
})
export class ProtocolRepository extends BaseCrudRepository<Protocol, ProtocolSaveRequest> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Protocols');
    }

}

