import { Injectable, Injector } from "@angular/core";
import { appSettings } from "@app/app";
import { Order, OrderSellDeviceByAgentRequest } from "@app/contracts/sale/order";
import { QueryResult } from "@framework/contracts";
import { Attachment } from "@framework/contracts/attachment";
import { BaseCrudRepository } from "@framework/repositories";

@Injectable({
    providedIn: 'root'
})
export class OrderRepository extends BaseCrudRepository<Order> {
    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Orders');
    }

    sellByAgent(req: OrderSellDeviceByAgentRequest) {
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
