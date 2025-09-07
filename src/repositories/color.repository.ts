import {Injectable, Injector} from '@angular/core';
import {appSettings} from '../app';
import {Color, ColorSaveRequest} from '../contracts/color';
import {BaseCrudRepository} from "@framework/repositories";

@Injectable({
    providedIn: 'root'
})
export class ColorRepository extends BaseCrudRepository<Color, ColorSaveRequest> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Colors');
    }

}
