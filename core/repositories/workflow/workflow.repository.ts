import {Injectable, Injector} from '@angular/core';
import {Workflow, WorkflowSaveRequest, WorkflowState, WorkflowTransition, WorkflowTransitionFunctionHandlerDto} from '../../contracts/workflow/workflow';
import { BASE_URL_SHARED } from "../../config";
import {BaseCrudRepository} from "@framework/repositories";
import { QueryResult } from '@framework/contracts';


@Injectable({
    providedIn: 'root'
})
export class WorkflowRepository extends BaseCrudRepository<Workflow, WorkflowSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Workflows');
    }

    getAllState(id: string) {
        return this.http.get<QueryResult<WorkflowState[]>>(`${id}/States`)
    }

    getAllTransition(id: string) {
        return this.http.get<QueryResult<WorkflowTransition[]>>(`${id}/Transitions`)
    }

    getAllTransitionFunction(id: string) {
        return this.http.get<QueryResult<WorkflowTransitionFunctionHandlerDto[]>>(`${id}/TransitionFunctions`)
    }
}

