import { Injectable, Injector } from '@angular/core';
import { BaseApiRepository, BaseCrudRepository } from "@framework/repositories";
import { appSettings } from "../../app";
import { Level } from '@app/contracts/identity/level';

@Injectable({ providedIn: 'root' })
export class LevelRepository extends BaseCrudRepository<Level, any> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Levels')
    }
}
