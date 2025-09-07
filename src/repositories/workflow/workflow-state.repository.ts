import {Injectable, Injector} from '@angular/core';
import {appSettings} from '../../app';
import {BaseCrudRepository} from "@framework/repositories";
import { WorkflowState, WorkflowStateSaveRequest } from '../../contracts/workflow/workflow';


@Injectable({
    providedIn: 'root'
})
export class WorkflowStateRepository extends BaseCrudRepository<WorkflowState, WorkflowStateSaveRequest> {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'WorkflowStates');
    }
}
