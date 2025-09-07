import {Injectable, Injector} from '@angular/core';
import {appSettings} from '../app';
import {BaseCrudRepository} from "@framework/repositories";;
import { MessageDto } from '@shared/contracts/message';


@Injectable({
    providedIn: 'root'
})
export class MessageRepository extends BaseCrudRepository<MessageDto> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Messages');
    }
}

