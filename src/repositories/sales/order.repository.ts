import { Injectable, Injector } from "@angular/core";
import { BASE_URL_SHARED } from "../../config";
import { Order, OrderSellDeviceRequest } from "@shared/contracts/sale/order";
import { QueryResult } from "@framework/contracts";
import { Attachment } from "@framework/contracts/attachment";
import { BaseCrudRepository } from "@framework/repositories";

@Injectable({
    providedIn: 'root'
})
export class OrderRepository extends BaseCrudRepository<Order> {
    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Orders');
    }

    sellByAgent(req: OrderSellDeviceRequest) {
        return this.http.post<QueryResult<Order>>('SellDeviceByAgent', req);
    }

    addAttachment(id: string, req: Attachment) {
        return this.http.post<QueryResult<Order>>(`${id}/Attachments`, req);
    }

    deleteAttachment(id: string, filename: string) {
        return this.http.delete<QueryResult<Order>>(`${id}/Attachments/${filename}`);
    }

    saveAttachments(id: string, attachments: Attachment[]) {
        return this.http.put<QueryResult<Order>>(`${id}/Attachments`, attachments);
    }
}
