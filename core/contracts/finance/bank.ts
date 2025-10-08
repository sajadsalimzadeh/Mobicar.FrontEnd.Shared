import { FullEntity } from "@framework/contracts";

export interface Bank extends FullEntity {
    name: string;
    isEnabled: boolean;
}