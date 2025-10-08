import { FullEntity } from "@framework/contracts"
import { PaymentGatewayType } from "./transaction"
import { User } from "../identity/user";
import { AttachmentDto } from "@framework/contracts/attachment";
import { EnumUtil } from "@framework/utils";

export interface Wallet extends FullEntity {
    userId: string;
    currencyId: string;
    name: string;
    balance: number;
    status: WalletStatus;

    user?: User;
    currency?: Currency
}

export enum WalletStatus {
    Inactive = -1,
    Active = 0,
}

export const WalletStatuses: any = EnumUtil.getObject(WalletStatus);

export interface Currency {
    id: string
    creationTime: string
    creatorId: string
    creatorName: string
    modificationTime: string
    modifierId: string
    modifierName: string
    deletionTime: string
    isDeleted: boolean
    deleterId: string
    deleterName: string
    name: string
    symbol: string
}

export interface WalletChargeRequest {
    type: PaymentGatewayType;
    amount: number;
    attachments: AttachmentDto[];
    redirectUrl: string;
}

export interface PaymentGatewayChargeResponse {
    referenceId: string;
    redirectUrl: string;
    body: { key: string, value: any }[];
}