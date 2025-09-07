import { Injectable, Injector } from "@angular/core";
import { BASE_URL_SHARED } from "../../config";
import { DeviceActivationPolicyWithCodesDto } from "../../contracts/device/device-activation";
import { QueryResult } from "@framework/contracts";
import { BaseApiRepository } from "@framework/repositories";

@Injectable({ providedIn: 'root' })
export class DeviceActivationPolicyRepository extends BaseApiRepository {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'DeviceActivationPolicies');
    }

    getActivationWithCodes(id: string) {
        return this.http.get<QueryResult<DeviceActivationPolicyWithCodesDto>>(`${id}/Activations`);
    }

    getAllByDeviceIdWithActivationCodes(deviceId: string) {
        return this.http.get<QueryResult<DeviceActivationPolicyWithCodesDto[]>>(`ByDeviceId/${deviceId}/Activations`);
    }
}