import { EnumUtil } from "@framework/utils";

export interface Access {
    id: string;
    name: string;
    isAssignable: boolean;
    isDeviceFacility: boolean;
    isOrganization: boolean;
    parent?: Access;
    children: Access[]
}

type PrivilegeType = 'action' | 'entity';

export class Privilege {
    readonly $type: PrivilegeType;
    isFullAccess: boolean;
    accessibility: string[];

    constructor($type: PrivilegeType) {
        this.$type = $type;
        this.isFullAccess = false;
        this.accessibility = [];
    }

    static parse(privilege: Privilege) {
        let result: Privilege | undefined;
        if (privilege.$type == 'entity') {
            result = new PrivilegeEntity(PrivilegeEntityType.Device);
        }
        else result = new PrivilegeAction();
        if (result) {
            Object.assign(result, privilege);
        }
        return result;
    }
}

export class PrivilegeAction extends Privilege {

    constructor() {
        super('action');
    }
}

export interface PrivilegeDataFilter {
    from: string;
    to: string;
}

export enum PrivilegeEntityType {
    Device = 1,
    Vehicle =  2,
}

export const PrivilegeEntityTypes = EnumUtil.getObject(PrivilegeEntityType);

export class PrivilegeEntity extends Privilege {
    id?: string;
    type: PrivilegeEntityType;
    workflowStateId?: string;
    organizationId?: string;
    dataFilters: PrivilegeDataFilter[] = [];

    constructor(type: PrivilegeEntityType) {
        super('entity');
        this.type = type;
    }
}
