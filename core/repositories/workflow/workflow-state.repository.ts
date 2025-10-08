import {Injectable, Injector} from '@angular/core';
import { BASE_URL_SHARED } from "../../config";
import {BaseCrudRepository} from "@framework/repositories";
import { WorkflowState, WorkflowStateSaveRequest } from '../../contracts/workflow/workflow';


@Injectable({
    providedIn: 'root'
})
export class WorkflowStateRepository extends BaseCrudRepository<WorkflowState, WorkflowStateSaveRequest> {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'WorkflowStates');
    }
}
