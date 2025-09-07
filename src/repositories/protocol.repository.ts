import {HttpClient} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {QueryResult} from '@framework/contracts';
import {ProtocolManifest} from '../contracts/diag/manifest';
import { appSettings } from '@app/app';
import { ProtocolVersion } from '@app/contracts/diag/protocolVersion';
import { VehicleTree } from '@app/contracts/diag/vehicle-tree';
import { BaseApiRepository } from '@framework/repositories';
import { EcuType } from '@app/contracts/diag/ecu-type';


@Injectable({
    providedIn: 'root'
})
export class DiagServerProtocolRepository extends BaseApiRepository {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.diag, 'Protocols');
    }

    getAllManifest() {
        return this.http.get<QueryResult<ProtocolManifest[]>>(`Manifests`)
    }

    getAllVersion() {
        return this.http.get<QueryResult<ProtocolVersion[]>>(`Versions`)
    }

    getAllVehicleTreeByVersionAndCompany(protocolVersion: string, companyCode: string, locale: string = 'fa') {
        return this.http.get<QueryResult<VehicleTree[]>>(`Versions/${protocolVersion}/Companies/${companyCode}/VehicleTrees?locale=${locale}`);
    }

    getAllEcuType() {
        return this.http.get<QueryResult<EcuType[]>>(`$/assets/api/ecu-types.json`);
    }
}
