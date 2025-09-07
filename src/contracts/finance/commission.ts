import { FullEntity } from "@framework/contracts";
import { User } from "../identity/user";
import { Order } from "../sale/order";
import { Clearance } from "./clearance";
import { EnumUtil } from "@framework/utils";


export interface Commission extends FullEntity {
    userId: string;
    orderId: string;
    paymentId?: string;
    amount: number;
    networkLevel: number;
    commissionPercentage: number;
    paymentAvailableFrom: string;
    status: CommissionStatus;

    user?: User;
    order?: Order;
    payment?: Clearance;
}

export enum CommissionStatus {
    Pending = 0,
    Cleared = 1,
}

export const CommissionStatuses = EnumUtil.getObject(CommissionStatus);

export const CommissionStatusLabels: any = {
    [CommissionStatus.Pending]: 'در انتظار پرداخت',
    [CommissionStatus.Cleared]: 'تسویه شده',
};