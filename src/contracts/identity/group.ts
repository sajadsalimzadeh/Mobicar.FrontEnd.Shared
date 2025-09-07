import { CreationEntity, FullEntity } from "@framework/contracts";
import { Claim } from "@app/contracts/claim";
import { Privilege } from "@app/contracts/identity/access";
import { Organization } from "@app/contracts/organization/organization";

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