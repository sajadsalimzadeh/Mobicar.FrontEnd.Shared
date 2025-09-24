import { FullEntity } from "@framework/contracts";
import { Device } from "../device/device";
import { Transaction } from "../finance/transaction";
import { User } from "../identity/user";
import { Attachment } from "@framework/contracts/attachment";
import { DeviceActivationSelector } from "../device/device-activation";
import { EnumUtil } from "@framework/utils";

export interface Order extends FullEntity {
    userId: string;
    deviceId?: string;
    agentId?: string;
    transactionId?: string;
    totalPrice: number;
    type: OrderType;
    paymentMethod: OrderPaymentMethod;
    salePackageIds: string[];
    status: OrderStatus;
    user?: User;
    device?: Device;
    agent?: User;
    transaction?: Transaction;

    attachments?: Attachment[];
}

export enum OrderPaymentMethod {
    AgentWallet = -2,
    CustomerWallet = -1,
    None = 0,
    Pos = 1,
    WebSite = 2,
    Transfer = 3,
}

export const OrderPaymentMethods: any = {
    [OrderPaymentMethod.AgentWallet]: 'AgentWallet',
    [OrderPaymentMethod.CustomerWallet]: 'CustomerWallet',
    [OrderPaymentMethod.None]: 'None',
    [OrderPaymentMethod.Pos]: 'Pos',
    [OrderPaymentMethod.WebSite]: 'WebSite',
    [OrderPaymentMethod.Transfer]: 'Transfer'
}

export const OrderPaymentMethodLabels: any = {
    [OrderPaymentMethod.AgentWallet]: 'پرداخت توسط نماینده',
    [OrderPaymentMethod.CustomerWallet]: 'پرداخت توسط مشتری',
    [OrderPaymentMethod.None]: 'نامشخص',
    [OrderPaymentMethod.Pos]: 'دستگاه پوز',
    [OrderPaymentMethod.WebSite]: 'سایت',
    [OrderPaymentMethod.Transfer]: 'انتقال وجه'
};

export enum OrderType {
    Unknown = 0,
    Internal = 1,
    External = 2,
}

export const OrderTypes = EnumUtil.getObject(OrderType);

export const OrderTypeLabels: any = {
    [OrderType.Unknown]: 'نامشخص',
    [OrderType.Internal]: 'فروش داخلی',
    [OrderType.External]: 'فروش خارجی'
}

export enum OrderStatus {
    Cancelled = -1,
    Draft = 0,
    Completed = 1,
}

export const OrderStatuses = EnumUtil.getObject(OrderStatus);

export const OrderStatusLabels: any = {
    [OrderStatus.Draft]: 'پیش نویس',
    [OrderStatus.Completed]: 'تکمیل شده',
    [OrderStatus.Cancelled]: 'لغو شده'
}


export interface OrderSellDeviceRequest {
    userId: string;
    deviceId: string;
    currencyId: string;
    totalPrice: number;
    type: OrderType;
    paymentMethod: OrderPaymentMethod;
    salePackages: OrderSalePackageSellRequest[];
}

export interface OrderSalePackageSellRequest {
    id: string;
    deviceActivationUserSelects?: DeviceActivationSelector[];
}