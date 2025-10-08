import { CreateEntity } from "@framework/contracts";
import { Wallet } from "./wallet";
import { EnumUtil } from "@framework/utils";

export interface Transaction extends CreateEntity {
    walletId: string;
    amount: number;
    balance: number;
    referenceId?: string;
    description: string;
    status: TransactionStatus;
    code: number;
    type: TransactionType;

    paymentGatewayData?: TransactionPaymentGatewayData;
    wallet?: Wallet;
    
}

export interface TransactionPaymentGatewayData
{
    type: PaymentGatewayType;
    startTime: Date;
    completeTime: Date;
    referenceId: string;
    saleReferenceId: string;
    exceptionMessage: string;
    redirectUrl: string;
}


export enum PaymentGatewayType {
    BehpardakhtMellat = 0
}

export const PaymentGatewayTypes = EnumUtil.getObject(PaymentGatewayType);

export const PaymentGatewayTypeLabels: any = {
    [PaymentGatewayType.BehpardakhtMellat]: 'به پرداخت ملت',
}

export enum TransactionType
{
    Withdraw = -2,
    PayOrder = -1,
    Draft = 0,
    WalletCharge = 1,
    ClearCommission = 2,
    ChargeForPayOrder = 3,
}

export const TransactionTypes = EnumUtil.getObject(TransactionType);

export const TransactionTypeLabels: any = {
    [TransactionType.Withdraw]: 'برداشت وجه',
    [TransactionType.PayOrder]: 'پرداخت سفارش',
    [TransactionType.Draft]: 'بدون تراکنش',
    [TransactionType.WalletCharge]: 'شارژ کیف پول',
    [TransactionType.ClearCommission]: 'تسویه کمیسیون',
    [TransactionType.ChargeForPayOrder]: 'شارژ برای پرداخت سفارش',
}

export enum TransactionStatus
{
    Draft = 0,
    Success = 1,
    Failed = 2,
    Timeout = 3,
}

export const TransactionStatuses = EnumUtil.getObject(TransactionStatus);

export const TransactionStatusLabels: any = {
    [TransactionStatus.Draft]: 'پیش نویس',
    [TransactionStatus.Success]: 'موفق',
    [TransactionStatus.Failed]: 'ناموفق',
    [TransactionStatus.Timeout]: 'توقف',
}
