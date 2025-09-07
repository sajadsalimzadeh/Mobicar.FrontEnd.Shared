import { Injectable, Injector } from "@angular/core";
import { BASE_URL_SHARED } from "../config";
import { DashboardAdminResponse, DashboardAgentResponse, DashboardDeviceResponse, DashboardFinanceResponse, DashboardSaleResponse } from "@shared/contracts/dashboard";
import { QueryResult } from "@framework/contracts";
import { BaseApiRepository } from "@framework/repositories";

@Injectable({ providedIn: 'root' })
export class DashboardRepository extends BaseApiRepository {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Dashboard');
    }

    getAdminDashboard() {
        return this.http.get<QueryResult<DashboardAdminResponse>>('Admin');
    }

    getDeviceDashboard() {
        return this.http.get<QueryResult<DashboardDeviceResponse>>('Device');
    }

    getFinanceDashboard(from: string, to: string) {
        return this.http.get<QueryResult<DashboardFinanceResponse>>(`Finance/${from}/${to}`);
    }

    getSalesDashboard(from: string, to: string) {
        return this.http.get<QueryResult<DashboardSaleResponse>>(`Sale/${from}/${to}`);
    }

    getAgentDashboard(from: string, to: string) {
        return this.http.get<QueryResult<DashboardAgentResponse>>(`Agent/${from}/${to}`);
    }
}