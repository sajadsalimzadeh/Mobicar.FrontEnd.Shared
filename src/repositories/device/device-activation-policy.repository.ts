import { Injectable, Injector } from "@angular/core";
import { appSettings } from "@app/app";
import { DeviceActivationPolicyWithCodesDto } from "@app/contracts/device/device-activation";
import { QueryResult } from "@framework/contracts";
import { BaseApiRepository } from "@framework/repositories";

@Injectable({ providedIn: 'root' })
export class DeviceActivationPolicyRepository extends BaseApiRepository {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'DeviceActivationPolicies');
    }

    getActivationWithCodes(id: string) {
        return this.http.get<QueryResult<DeviceActivationPolicyWithCodesDto>>(`${id}/Activations`);
    }

    getAllByDeviceIdWithActivationCodes(deviceId: string) {
        return this.http.get<QueryResult<DeviceActivationPolicyWithCodesDto[]>>(`ByDeviceId/${deviceId}/Activations`);
    }
}