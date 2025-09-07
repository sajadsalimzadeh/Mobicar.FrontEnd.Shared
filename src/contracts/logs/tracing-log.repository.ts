import {Injectable, Injector} from '@angular/core';
import {appSettings} from '../../app';
import {BaseCrudRepository} from "@framework/repositories";
import { TracingLog, TracingLogSaveRequest } from '@shared/contracts/logs/tracing-log';


@Injectable({
    providedIn: 'root'
})
export class TracingLogRepository extends BaseCrudRepository<TracingLog, TracingLogSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'TracingLogs');
    }

}

