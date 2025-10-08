import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { dataStore } from '@data/stores/data.store';
import { internetStateService } from '@framework/services/internet-state.service';
import { IngestRepository } from '@data/repositories/ingest.repository';
import { WorkerWithInterval } from '@framework/services/worker.service';
import { DtcRepository } from '@core/repositories/dtc.repository';
import { BaseDataEntity } from '@data/contracts/entity';
import { delay, ITable } from '@framework/utils';

@Injectable({ providedIn: 'root' })
export class DataIngestionBackgroundService extends WorkerWithInterval {
    retyingCounter: { [key: string]: number } = {};

    count = 100;
    isFirstLoop = true;

    constructor(injector: Injector, private ingestRepository: IngestRepository, private dtcRepository: DtcRepository) {
        super(injector, 10000);
    }

    override async invoke(): Promise<void> {
        if (!internetStateService.$status.value) return;

        let requestCounter = 0;
        const responseHandler = <T extends BaseDataEntity>(table: ITable<T, string>, entities: T[], name: string) => {

            requestCounter++;
            return {
                next: async (res: any) => {
                    requestCounter--;
                    if (res.success) {
                        this.retyingCounter[name] = 0;
                        await table.deleteAll(entities.map(x => x.id));
                    }
                },
                error: async (e: any) => {
                    requestCounter--;
                    if (e instanceof HttpErrorResponse && e.status > 0) {
                        
                        this.retyingCounter[name]++;
                        if(this.retyingCounter[name] > 5) {
                            await table.delete(entities[0].id);
                        }
                    }
                }
            }
        }

        let trips = await dataStore.trips.getAll(undefined, this.count);
        if (!this.isFirstLoop) trips = trips.filter(x => x.isEnded);
        if (trips.length) {
            for (const deviceGroup of trips.groupBy(x => x.deviceId)) {
                for (const vehicleGroup of deviceGroup.value.groupBy(x => x.vehicleId)) {
                    this.ingestRepository.ingestTrip(deviceGroup.key, vehicleGroup.key, vehicleGroup.value)
                        .subscribe(responseHandler(dataStore.trips, vehicleGroup.value, 'trips'));
                }
            }
        }

        const locations = await dataStore.locations.getAll(undefined, this.count);
        if (locations.length > 0) {
            for (const deviceGroup of locations.groupBy(x => x.deviceId)) {
                for (const vehicleGroup of deviceGroup.value.groupBy(x => x.vehicleId)) {
                    this.ingestRepository.ingestLocation(deviceGroup.key, vehicleGroup.key, vehicleGroup.value)
                        .subscribe(responseHandler(dataStore.locations, vehicleGroup.value, 'locations'));
                }
            }
        }

        const parameters = await dataStore.parameters.getAll(undefined, this.count);
        if (parameters.length > 0) {
            for (const deviceGroup of parameters.groupBy(x => x.deviceId)) {
                for (const vehicleGroup of deviceGroup.value.groupBy(x => x.vehicleId)) {
                    this.ingestRepository.ingestParameter(deviceGroup.key, vehicleGroup.key, vehicleGroup.value)
                        .subscribe(responseHandler(dataStore.parameters, vehicleGroup.value, 'parameters'));
                }
            }
        }

        const dtcs = await dataStore.diagnostics.getAll(undefined, this.count);
        if (dtcs.length > 0) {
            for (const deviceGroup of dtcs.groupBy(x => x.deviceId)) {
                for (const vehicleGroup of deviceGroup.value.groupBy(x => x.vehicleId)) {
                    this.ingestRepository.ingestDiagnostic(deviceGroup.key, vehicleGroup.key, vehicleGroup.value)
                        .subscribe(responseHandler(dataStore.diagnostics, vehicleGroup.value, 'diagnostics'));
                }
            }
        }

        const ThirdPartyDatas = await dataStore.ThirdPartyDatas.getAll(undefined, this.count);
        if (ThirdPartyDatas.length > 0) {
            for (const deviceGroup of ThirdPartyDatas.groupBy(x => x.deviceId)) {
                for (const vehicleGroup of deviceGroup.value.groupBy(x => x.vehicleId)) {
                    this.ingestRepository.ingestThirdPartyData(deviceGroup.key, vehicleGroup.key, vehicleGroup.value)
                        .subscribe(responseHandler(dataStore.ThirdPartyDatas, vehicleGroup.value, 'ThirdPartyDatas'));
                }
            }
        }

        const dtcTranslateRequests = await dataStore.dtcTranslateRequests.getAll(undefined, this.count);
        try {
            if (dtcTranslateRequests.length > 0) {
                for (const dtcTranslateRequest of dtcTranslateRequests) {
                    try {
                        this.dtcRepository.translate(dtcTranslateRequest);
                        await dataStore.dtcTranslateRequests.delete(dtcTranslateRequest.id);
                    } catch (e) {
                        if (e instanceof HttpErrorResponse && e.status == 400) {
                            console.log(e, dtcTranslateRequest.id)
                            await dataStore.dtcTranslateRequests.delete(dtcTranslateRequest.id);
                        } else {
                            const key = 'dtcTranslateRequests-' + dtcTranslateRequest.id;
                            if (!this.retyingCounter[key]) this.retyingCounter[key] = 1;
                            else this.retyingCounter[key]++;

                            if (this.retyingCounter[key] > 5) {
                                await dataStore.dtcTranslateRequests.delete(dtcTranslateRequest.id);
                            }
                        }
                    }
                }
            }
        } catch {
        }

        while(requestCounter > 0) await delay(1000);
    }
}
