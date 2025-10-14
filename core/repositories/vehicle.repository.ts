import {Injectable, Injector} from '@angular/core';
import { BASE_URL_SHARED } from "../config";
import {BaseCrudRepository} from "@framework/repositories";
import { Vehicle } from '../contracts/vehicle';
import { QueryResult } from '@framework/contracts';

@Injectable({
    providedIn: 'root'
})
export class VehicleRepository extends BaseCrudRepository<any, any> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Vehicles');
    }


    getAllOwn() {
        return this.http.get<QueryResult<Vehicle[]>>(`Own`)
    }

    saveOwn(req: any) {
        if (req.id) {
            return this.http.patch<QueryResult<Vehicle>>(`Own/${req.id}`, req);
        }
        delete req.id;
        return this.http.post<QueryResult<Vehicle>>(`Own`, req);
    }
}
