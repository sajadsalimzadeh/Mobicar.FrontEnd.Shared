import { Injectable, Injector } from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import { BaseCrudRepository } from "@framework/repositories";
import { DeviceActivationPassword, DeviceActivationPasswordResetRequest, DeviceActivationPasswordSaveRequest } from '@core/contracts/device/device-activation-password';
import { CommandResult } from '@framework/contracts';


@Injectable({
    providedIn: 'root'
})
export class DeviceActivationPasswordRepository extends BaseCrudRepository<DeviceActivationPassword, DeviceActivationPasswordSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'DeviceActivationPasswords');
    }

    reset(id: string, req: DeviceActivationPasswordResetRequest) {
        return this.http.post<CommandResult>(`${id}/Reset`, req);
    }
}

