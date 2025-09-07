import {Injectable, Injector} from '@angular/core';
import {appSettings} from '../../app';
import {QueryResult} from '@framework/contracts';
import {Access} from '../../contracts/identity/access';
import {BaseApiRepository} from "@framework/repositories";
import {tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AccessRepository extends BaseApiRepository {

    accessDictionary: { [key: string]: string[] } = {};

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Accesses');

    }

    getAllTree() {
        return this.http.get<QueryResult<Access[]>>('Tree');
    }

    getAllFlat() {
        return this.http.get<QueryResult<Access[]>>('Flat')
    }

    getDictionary() {
        return this.http.get<QueryResult<{ [key: string]: string[] }>>('Dictionary').pipe(tap({
            next: res => {
                if (res.data) {
                    this.accessDictionary = res.data
                }
            }
        }))
    }

}


