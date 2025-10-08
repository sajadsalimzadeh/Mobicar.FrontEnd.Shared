import {Injectable, Injector} from '@angular/core';
import { BASE_URL_SHARED } from "../config";
import {BaseCrudRepository} from "@framework/repositories";;
import { MessageDto } from '@core/contracts/message';


@Injectable({
    providedIn: 'root'
})
export class MessageRepository extends BaseCrudRepository<MessageDto> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Messages');
    }
}

