import { FullEntity } from "@framework/contracts";
import { Wallet } from "./wallet";
import { BankInfo } from "./bank-info";
import { User } from "../identity/user";

export interface Withdraw extends FullEntity {
    userId: string;
    walletId: string;
    bankInfoId: string;
    clearanceId?: string;
    amount: number;
    status: WithdrawStatus;

    user?: User;
    wallet?: Wallet;
    bankInfo?: BankInfo;    
}

export enum WithdrawStatus {
    Canceled = -1,
    Pending = 0,
    Paying = 1,
    Paid = 2,
}

export const WithdrawStatuses: any = {
    [WithdrawStatus.Canceled]: 'Canceled',
    [WithdrawStatus.Pending]: 'Pending',
    [WithdrawStatus.Paying]: 'Paying',
    [WithdrawStatus.Paid]: 'Paid',
}

export const WithdrawStatusLabels: any = {
    [WithdrawStatus.Canceled]: 'لغو شده',
    [WithdrawStatus.Pending]: 'در انتظار پرداخت',
    [WithdrawStatus.Paying]: 'درحال پرداخت',
    [WithdrawStatus.Paid]: 'پرداخت شده',
}

export interface WithdrawCancelRequest {
    userId: string;
}