import { Injectable, Injector } from '@angular/core';
import { QueryResult } from '@framework/contracts';
import { Wallet, WalletChargeRequest, PaymentGatewayChargeResponse } from '../../contracts/finance/wallet';
import { appSettings } from '@app/app';
import { Transaction } from '@app/contracts/finance/transaction';
import { BaseApiRepository } from '@framework/repositories';


@Injectable({
    providedIn: 'root'
})
export class WalletRepository extends BaseApiRepository {

    constructor(injector: Injector) {
        super(injector, appSettings.urls.api, 'Wallets');
    }

    getAllOwn() {
        return this.http.get<QueryResult<Wallet[]>>(`Own`)
    }

    getOwnWalletByCurrencySymbol(currencySymbol: string = 'IRR') {
        return this.http.get<QueryResult<Wallet>>(`Own/ByCurrency/${currencySymbol}`)
    }

    getOwnWalletsTransactions(id: string) {
        return this.http.get<QueryResult<Transaction[]>>(`Own/${id}/Transactions`)
    }

    charge(id: string, req: WalletChargeRequest) {
        req.redirectUrl = location.origin;
        return this.http.post<QueryResult<PaymentGatewayChargeResponse>>(`${id}/Charge`, req);
    }

}
