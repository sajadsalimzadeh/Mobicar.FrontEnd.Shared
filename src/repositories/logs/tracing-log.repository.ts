import {Injectable, Injector} from '@angular/core';
import {appSettings} from '../../app';
import {BaseCrudRepository} from "@framework/repositories";
import { TracingLog, TracingLogSaveRequest } from '@app/contracts/logs/tracing-log';


@Injectable({
    providedIn: 'root'
})
export class TracingLogRepository extends BaseCrudRepository<TracingLog, TracingLogSaveRequest> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'TracingLogs');
    }

}

