import {Injectable, Injector} from '@angular/core';
import {appSettings} from '../../app';
import {BaseCrudRepository} from "@framework/repositories";
import {WorkflowTransition, WorkflowTransitionFunctionHandlerDto} from "@shared/contracts/workflow/workflow";
import { QueryResult } from '@framework/contracts';


@Injectable({
    providedIn: 'root'
})
export class WorkflowTransitionRepository extends BaseCrudRepository<WorkflowTransition> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'WorkflowTransitions');
    }

    getAllFunction() {
        return this.http.get<QueryResult<WorkflowTransitionFunctionHandlerDto[]>>(`Functions`);
    }
}
