import {Injectable, Injector} from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import {BaseApiRepository, BaseCrudRepository} from "@framework/repositories";
import { TracingLog, TracingLogSaveRequest } from '@shared/contracts/logs/tracing-log';


@Injectable({
    providedIn: 'root'
})
export class TracingLogRepository extends BaseApiRepository {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'TracingLogs');
    }

    add(data: TracingLogSaveRequest) {
        return this.http.post<TracingLog>(``, data);
    }
}

