import {Injectable, Injector} from '@angular/core';
import {QueryResult} from '@framework/contracts';
import {ProtocolManifest} from '../contracts/diag/manifest';
import { ProtocolVersion } from '@shared/contracts/diag/protocolVersion';
import { VehicleTree } from '@shared/contracts/diag/vehicle-tree';
import { BaseApiRepository } from '@framework/repositories';
import { EcuType } from '@shared/contracts/diag/ecu-type';
import { BASE_URL_DIAG } from '../config';


@Injectable({
    providedIn: 'root'
})
export class DiagServerProtocolRepository extends BaseApiRepository {

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
