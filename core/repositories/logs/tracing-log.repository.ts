import {Injectable, Injector} from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import {BaseApiRepository} from "@framework/repositories";
import { TracingLog, TracingLogSaveRequest } from '../../contracts/logs/tracing-log';
import { QueryResult } from '@framework/contracts';


@Injectable({
    providedIn: 'root'
})
export class TracingLogRepository extends BaseApiRepository {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'TracingLogs');
    }

    getAll() {
        return this.http.get<QueryResult<TracingLog[]>>('');
    }

    add(data: TracingLogSaveRequest) {
        return this.http.post<TracingLog>(``, data);
    }
}

