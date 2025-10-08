import { FullEntity } from "@framework/contracts";
import { Bank } from "./bank";
import { User } from "../identity/user";
import { EnumUtil } from "@framework/utils";

export interface BankInfo extends FullEntity {
    userId: string;
    bankId: string;
    sheba?: string;
    accountNumber?: string;
    cardNumber?: string;
    deciderId?: string;
    decideTime?: string;
    status: BankInfoStatus;

    user?: User;
    bank?: Bank;
}

export enum BankInfoStatus {
    Rejected = -1,
    Pending = 0,
    Approved = 1,
}

export const BankInfoStatuses = EnumUtil.getObject(BankInfoStatus);

export const BankInfoStatusLabels: any = {
    [BankInfoStatus.Rejected]: 'رد شده',
    [BankInfoStatus.Pending]: 'در انتظار تایید',
    [BankInfoStatus.Approved]: 'تایید شده',
}
