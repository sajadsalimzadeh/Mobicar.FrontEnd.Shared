import { CreationEntity } from "@framework/contracts";
import { Claim } from "../claim";
import { Privilege } from "../identity/access";
import { Organization } from "../organization/organization";

export interface Group extends CreationEntity {
    organizationId: string
    name: string
    description: string
    privileges: Privilege[]
    claims: Claim[]
    organization: Organization
}

export interface GroupSaveRequest {
    id:any
    organizationId: string
    name: string
    description: string
    privileges: Privilege[]
    claims: Claim[]
    organization: Organization
}