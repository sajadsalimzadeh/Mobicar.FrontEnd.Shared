import {Injectable, Injector} from '@angular/core';
import {appSettings} from '../../app';
import {BaseCrudRepository} from "@framework/repositories";
import { DeviceActivationPassword, DeviceActivationPasswordResetRequest, DeviceActivationPasswordSaveRequest } from '@app/contracts/device/device-activation-password';
import { CommandResult } from '@framework/contracts';


@Injectable({
    providedIn: 'root'
})
export class DeviceActivationPasswordRepository extends BaseCrudRepository<DeviceActivationPassword, DeviceActivationPasswordSaveRequest> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'DeviceActivationPasswords');
    }

    reset(id: string, req: DeviceActivationPasswordResetRequest) {
        return this.http.post<CommandResult>(`${id}/Reset`, req);
    }
}

