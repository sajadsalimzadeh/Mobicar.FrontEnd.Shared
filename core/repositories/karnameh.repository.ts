import { Injectable, Injector } from "@angular/core";
import { BaseApiRepository } from "@framework/repositories";
import { BASE_URL_SHARED } from "../config";
import { KarnamehBodyStatusDto, KarnamehCarPriceEstimateResponse, KarnamehColorDto, KarnamehVehicleDto } from "../contracts/karnameh";
import { KarnamehCarPriceEstimateRequest } from "../contracts/karnameh";

@Injectable({
    providedIn: 'root'
})
export class KarnamehRepository extends BaseApiRepository {

    constructor(injector: Injector) {
        super(injector, injector.get(BASE_URL_SHARED), 'Karnameh');
    }

    estimateCarPrice(request: KarnamehCarPriceEstimateRequest) {
        return this.http.post<KarnamehCarPriceEstimateResponse>(`EstimateCarPrice`, request);
    }

    getAllColor() {
        return this.http.get<KarnamehColorDto[]>('$/assets/api/karnameh/colors.json');
    }

    getAllBodyStatus() {
        return this.http.get<KarnamehBodyStatusDto[]>('$/assets/api/karnameh/body-statuses.json');
    }

    getAllVehicle() {
        return this.http.get<KarnamehVehicleDto[]>('$/assets/api/karnameh/vehicles.json');
    }

}
