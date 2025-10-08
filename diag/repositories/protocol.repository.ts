import {Injectable, Injector} from '@angular/core';
import {QueryResult} from '@framework/contracts';
import {ProtocolManifest} from '@diag/contracts/manifest';
import { ProtocolVersion } from '@diag/contracts/protocolVersion';
import { VehicleTree } from '@diag/contracts/vehicle-tree';
import { BaseApiRepository } from '@framework/repositories';
import { EcuType } from '@diag/contracts/ecu-type';
import { BASE_URL_DIAG } from '../config';


@Injectable({
    providedIn: 'root'
})
export class ProtocolRepository extends BaseApiRepository {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_DIAG), 'Protocols');
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
