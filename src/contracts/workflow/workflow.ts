import { CreationEntity, FullEntity } from "@framework/contracts"
import { Organization } from "../organization/organization"
import { Claim } from "@app/contracts/claim";
import { User } from "../identity/user";
import { EnumUtil } from "@framework/utils";

export enum WorkflowEntityType {
    Device = 1,
}

export const WorkflowEntityTypeOption = [
    { key: WorkflowEntityType.Device, value: 'Device' },
]

export interface Workflow extends FullEntity {
    organizationId: string;
    name: string;
    description: string;
    entityType: WorkflowEntityType;
    tags: string[];

    organization?: Organization
}

export interface WorkflowSaveRequest {
    id: any;
    organizationId: string
    name: string
    description: string
    entityType: WorkflowEntityType
    tags: string[]
}

export interface WorkflowStateDesignInfo {
    positionX: number;
    positionY: number;
}

export interface WorkflowState extends FullEntity {
    workflowId: string
    name: string
    isStartPoint: boolean
    designInfo: WorkflowStateDesignInfo
    claims: Claim[]
    tags: string[]

    workflow?: Workflow;
}


export interface WorkflowStateSaveRequest {
    id: any;
    workflowId: string
    name: string
    isStartPoint: boolean
    designInfo: WorkflowStateDesignInfo
    claims: Claim[];
    tags: string[];
}

// export interface WorkflowTransition extends FullEntity {
//     name: string
//     workflowId: string
//     sourceStateId: string
//     destinationStateId: string
//     screenId: string
//     designInfo: WorkflowTransitionDesignInfo
//     accesses: string[]
//     postFunctions: WorkflowTransitionPostFunction[]

//     sourceState?: WorkflowState;
//     destinationState?: WorkflowState;
// }


export interface WorkflowTransition extends FullEntity {
    name: string;
    workflowId: string;
    sourceStateId: string;
    destinationStateId: string;
    screenId: string;
    privilege: WorkflowTransitionPrivilege;
    designInfo: WorkflowTransitionDesignInfo;
    functions: WorkflowTransitionFunction[];
    
    screen?: Screen;
    workflow?: Workflow;
    sourceState?: WorkflowState;
    destinationState?: WorkflowState;
}

export interface DevicesWorkflowTransitionSaveRequest {
    id: string
    transitionId: string
    data: string
}


export interface WorkflowTransitionPrivilege {
    access: string
    owner: boolean
}

export enum WorkflowTransitionConnectionSide {
    Top = 1,
    Bottom = 2,
    Left = 3,
    Right = 4
}

export const WorkflowTransitionConnectionSideOption = [
    { key: WorkflowTransitionConnectionSide.Top, value: 'بالا' },
    { key: WorkflowTransitionConnectionSide.Right, value: 'راست' },
    { key: WorkflowTransitionConnectionSide.Bottom, value: 'پایین' },
    { key: WorkflowTransitionConnectionSide.Left, value: 'چپ' },
]

export interface WorkflowTransitionDesignInfo {
    sourceSide: WorkflowTransitionConnectionSide
    destinationSide: WorkflowTransitionConnectionSide
}

export interface WorkflowTransitionFunction {
    id: string;
    config: string;
}

export interface WorkflowTransitionFunctionHandlerDto {
    id: string;
    configScreenId?: string;
    requestScreenId?: string;
    name: string;
}

export interface WorkflowTransitionLog extends FullEntity {
    userId: string;
    entityId: string;
    transitionId: string;
    data: string;

    user?: User;
    transition?: WorkflowTransition;
}

