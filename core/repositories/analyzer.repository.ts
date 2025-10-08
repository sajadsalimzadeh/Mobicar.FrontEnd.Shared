import {Injectable, Injector} from '@angular/core';
import {BatteryTestRequest, BatteryTestResult} from "../../data/contracts/battery-test";
import {BASE_URL_DONGLE} from '@dongle/configs';
import {BaseApiRepository} from '@framework/repositories/base-api.repository';
import {QueryResult} from '@framework/contracts/results';

@Injectable({providedIn: 'root'})
export class DataAnalyzerRepository extends BaseApiRepository {
    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_DONGLE), 'DataAnalyzers');
    }

    analyzeBattery(req: BatteryTestRequest) {
        return this.http.post<QueryResult<BatteryTestResult>>('Battery', req);
    }
}
