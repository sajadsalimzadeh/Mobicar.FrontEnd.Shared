import { Gender } from "../gender";
import { OtpType } from "../identity/otp";
import { CreationEntity } from "@framework/contracts";
import { PrivilegeDataFilter, PrivilegeEntityType } from "./access";
import { HardwareType } from "../versioning/hardware";
import { Organization } from "../organization/organization";
import { UserDto } from "./user";
import { WorkflowStateDesignInfo, WorkflowTransitionDesignInfo } from "../workflow/workflow";

export interface AuthLoginRequest {
    tokenTimeToLiveInMinutes: number;
    rememberMe: boolean;
}

export interface AuthLoginWithPasswordRequest extends AuthLoginRequest {
    username: string;
    password: string;
}

export interface AuthLoginWithOtpRequest extends AuthLoginRequest {
    otpType: OtpType;
    receiver: string;
    otpCode: string;
}

export interface AuthRegisterRequest {
    name: string;
    cellphone: string;
    otpCode: string;
    gender?: Gender;
    password?: string;
    nationalCode?: string;
}

export interface AuthForgetPasswordRequest {
    receiver: string;
    otpType: OtpType;
    otpCode: string;
    password: string;
}

export interface AuthLoginResponse {
    accessToken: string;
    isNeedTwoFactorAuthentication: boolean;
}

export interface organizationDto extends CreationEntity {
    id: string
    creationTime: string
    creatorId: string
    creatorName: string
    name: string
}


export interface AuthLoginInfo {
    user: UserDto;
    organization: Organization;

    actionAccess: AuthActionAccess;
    deviceAccess: AuthEntityAccess;
    vehicleAccess: AuthEntityAccess;

    devices: AuthEntityDevice[];
    vehicles: AuthEntityVehicle[];

    workflowStates: AuthWorkflowState[];
    workflowTransitions: AuthWorkflowTransition[];
    organizations: AuthOrganization[];
    hardwares: AuthHardware[];
    users: AuthUser[];
}

export interface AuthAccess {
    isFullAccess: boolean;
    accessibility: string[];
}

export interface AuthEntity extends AuthAccess {
    id: string;
}

export interface AuthEntityDevice extends AuthEntity {
    serial: string;
    userId?: string;
    organizationId: string;
    hardwareId: string;
    workflowStateId: string;
    hardwareType: HardwareType;

    user?: AuthUser;
    organization?: AuthOrganization;
    hardware?: AuthHardware;
    workflowState?: AuthWorkflowState;

}

export interface AuthEntityVehicle extends AuthEntity {
    name: string;
}

export interface AuthActionAccess extends AuthAccess {
    creationTime: string;
}

export interface AuthEntityAccess {
    type: PrivilegeEntityType;
    items: AuthEntityAccessItem[];
}

export interface AuthEntityAccessItem extends AuthAccess {
    ids: string[];
    dataFilters: PrivilegeDataFilter[];
}

export interface AuthWorkflowState {
    id: string;
    workflowId: string;
    name: string;
    workflowName: string;
    tags: string[];
    isStartPoint: boolean;
    designInfo: WorkflowStateDesignInfo;
}

export interface AuthWorkflowTransition {
    id: string;
    workflowId: string;
    sourceStateId: string;
    destinationStateId: string;
    name: string;
    designInfo: WorkflowTransitionDesignInfo;

    sourceState?: AuthWorkflowState;
    destinationState?: AuthWorkflowState;
}

export interface AuthOrganization {
    id: string;
    name: string;
}

export interface AuthHardware {
    id: string;
    name: string;
}

export interface AuthUser {
    id: string;
    name: string;
    username: string;
}

export type AuthCheckAccess = {
    value: string;
    type: 'action';
} | {
    value: string;
    type: 'device';
    deviceId: string;
} | {
    value: string;
    type: 'organization';
} | {
    value: string;
    type: 'vehicle';
    vehicleId: string;
}