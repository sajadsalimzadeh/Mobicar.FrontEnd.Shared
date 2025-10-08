import { Injectable, Injector } from '@angular/core';
import { QueryResult } from '@framework/contracts';
import { UserDevices } from '../../contracts/identity/user';
import { BaseCrudRepository } from "@framework/repositories";
import { Device, DeviceAddBulkRequest, DeviceDto, DeviceGetByPolicyRequest, DeviceSaveRequest } from '@core/contracts/device/device';
import { CommandResult } from "@framework/contracts/results";
import { WorkflowTransition, WorkflowTransitionLog, WorkflowTransitionRequest } from '@core/contracts/workflow/workflow';
import { DeviceActivationPolicy } from '@core/contracts/device/device-activation';
import { BASE_URL_SHARED } from '@core/config';
import { Order, OrderSellDeviceRequest } from '@core/contracts/sale/order';
import { Protocol } from '@core/contracts/versioning/protocol';
import { Firmware } from '@core/contracts/versioning/firmware';
import { Application } from '@core/contracts/versioning/application';
import { Vehicle } from '@core/contracts/vehicle';

@Injectable({
    providedIn: 'root'
})
export class DeviceRepository extends BaseCrudRepository<Device, DeviceSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Devices');
    }

    addBulk(req: DeviceAddBulkRequest) {
        return this.http.post<QueryResult<number>>(`Bulk`, req)
    }

    getInfo(id: string) {
        return this.http.get<QueryResult<DeviceDto>>(`${id}/Info`);
    }

    getAllUserDevices() {
        return this.http.get<QueryResult<UserDevices[]>>('assets/api/user-device.json');
    }

    setUserId(id: string, userId: string) {
        return this.http.patch<CommandResult>(`${id}/SetUser`, { userId });
    }

    setMicroSerial(id: string, microSerial: string) {
        return this.http.patch<CommandResult>(`${id}/SetMicroSerial`, { microSerial });
    }

    getAllOwnTransition(id: string) {
        return this.http.get<QueryResult<WorkflowTransition[]>>(`${id}/Transitions`);
    }

    transition(id: string, req: WorkflowTransitionRequest) {
        return this.http.post<QueryResult<Device>>(`${id}/Transition`, req);
    }

    getAllOwnTransitionLog(id: string) {
        return this.http.get<QueryResult<WorkflowTransitionLog[]>>(`${id}/TransitionLogs`);
    }
    
    getAllActivationPolicies(id: string) {
        return this.http.get<QueryResult<DeviceActivationPolicy[]>>(`${id}/ActivationPolicies`);
    }
    
    saveActivationPolicy(deviceId: string, req: DeviceActivationPolicy) {
        if(req.id) {
            return this.http.patch<QueryResult<DeviceActivationPolicy>>(`${deviceId}/ActivationPolicies/${req.id}`, req);
        } else {
            delete (req as any).id;
            return this.http.post<QueryResult<DeviceActivationPolicy>>(`${deviceId}/ActivationPolicies`, req);
        }
    }

    deleteActivationPolicy(deviceId: string, id: string) {
        return this.http.delete<CommandResult>(`${deviceId}/ActivationPolicies/${id}`);
    }

    sell(id: string, req: OrderSellDeviceRequest) {
        return this.http.post<QueryResult<Order>>(`${id}/Sell`, req);
    }
    
    getOwnById(id: string) {
        return this.http.get<QueryResult>(`${id}`);
    }

    getAllFirmware(id: string, req: DeviceGetByPolicyRequest) {
        return this.http.get<QueryResult<Firmware[]>>(`${id}/Firmwares`, {params: {...req}});
    }

    getAllApplication(id: string, req: DeviceGetByPolicyRequest) {
        return this.http.get<QueryResult<Application[]>>(`${id}/Applications`, {params: {...req}});
    }

    getAllProtocol(id: string, req: DeviceGetByPolicyRequest) {
        return this.http.get<QueryResult<Protocol[]>>(`${id}/Protocols`, {params: {...req}});
    }

    getConnectedVehicle(id: string) {
        return this.http.get<QueryResult<Vehicle>>(`${id}/ConnectedVehicle`);
    }

    setConnectedVehicle(id: string, vehicleId: string) {
        return this.http.patch<QueryResult<Vehicle>>(`${id}/ConnectedVehicle/${vehicleId}`, {});
    }

    transitionOwnById(id: string, req: WorkflowTransitionRequest) {
        return this.http.post<QueryResult>(`${id}/Transition`, req);
    }

    activeByPassword(req: any) {
        return this.http.post<QueryResult>('ActiveByPassword', req)
    }
}