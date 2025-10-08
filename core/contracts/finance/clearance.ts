import { FullEntity } from "@framework/contracts";
import { AttachmentDto } from "@framework/contracts/attachment";
import { Currency } from "./wallet";
import { EnumUtil } from "@framework/utils";

export interface Clearance extends FullEntity {
    amount: number;
    currencyId: string;
    status: ClearanceStatus;
    payTime?: string;

    attachments: AttachmentDto[];

    currency?: Currency;
}

export enum ClearanceStatus {
    Cancelled = -1,
    Pending = 0,
    Paid = 1,
}

export const ClearanceStatuses = EnumUtil.getObject(ClearanceStatus);

export const ClearanceStatusLabels: any = {
    [ClearanceStatus.Cancelled]: 'لغو شده',
    [ClearanceStatus.Pending]: 'درحال پرداخت',
    [ClearanceStatus.Paid]: 'پرداخت شده',
}


export interface ClearanceAddRequest {
    maxAmount: number;
    from?: string;
    to?: string;
}

export interface ClearancePayRequest {
    attachments: AttachmentDto[];
}