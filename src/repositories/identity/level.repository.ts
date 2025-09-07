import { Injectable, Injector } from '@angular/core';
import { BaseApiRepository, BaseCrudRepository } from "@framework/repositories";
import { Level } from '@shared/contracts/identity/level';
import { BASE_URL_SHARED } from '@shared/config';

@Injectable({ providedIn: 'root' })
export class LevelRepository extends BaseCrudRepository<Level, any> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Levels')
    }
}
