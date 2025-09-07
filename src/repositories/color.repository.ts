import {Injectable, Injector} from '@angular/core';
import { BASE_URL_SHARED } from "../config";
import {Color, ColorSaveRequest} from '../contracts/color';
import {BaseCrudRepository} from "@framework/repositories";

@Injectable({
    providedIn: 'root'
})
export class ColorRepository extends BaseCrudRepository<Color, ColorSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Colors');
    }

}
