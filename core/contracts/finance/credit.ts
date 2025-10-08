import { FullEntity } from "@framework/contracts";
import { User } from "../identity/user";
import { EnumUtil } from "@framework/utils";

export interface Credit extends FullEntity {
    userId: string;
    amount: number;
    type: CreditType;
    description: string;
    status: CreditStatus;

    user?: User;
}

export enum CreditType {
    Other = 0,
    BankCheck = 1,
    Promissory = 2,
    Cash = 3,
    Introduction = 4,
}

export const CreditTypes = EnumUtil.getObject(CreditType);

export const CreditTypeLabels: any = {
    [CreditType.Other]: 'سایر',
    [CreditType.BankCheck]: 'چک بانکی',
    [CreditType.Promissory]: 'پرداختی',
    [CreditType.Cash]: 'نقدی',
    [CreditType.Introduction]: 'معرفی',
}

export const CreditTypeOptions = [
    { label: CreditTypeLabels[CreditType.Other], value: CreditType.Other },
    { label: CreditTypeLabels[CreditType.BankCheck], value: CreditType.BankCheck },
    { label: CreditTypeLabels[CreditType.Promissory], value: CreditType.Promissory },
    { label: CreditTypeLabels[CreditType.Cash], value: CreditType.Cash },
    { label: CreditTypeLabels[CreditType.Introduction], value: CreditType.Introduction },
]

export enum CreditStatus {
    GiveBack = 0,
    Active = 1,
}

export const CreditStatuses = EnumUtil.getObject(CreditStatus);

export const CreditStatusLabels: any = {
    [CreditStatus.GiveBack]: 'بازپس داده شده',
    [CreditStatus.Active]: 'فعال',
}

export const CreditStatusOptions = [
    { label: CreditStatusLabels[CreditStatus.GiveBack], value: CreditStatus.GiveBack },
    { label: CreditStatusLabels[CreditStatus.Active], value: CreditStatus.Active },
]