export interface KarnamehCarPriceEstimateRequest {
    brandModel: string;
    fromDate: string;
    toDate: string;
    minYear: number;
    maxYear: number;
    usage: number;
    bodyStatus: string;
    color: number;
}

export interface KarnamehCarPriceEstimateResponse {
    minPrice: number;
    maxPrice: number;
}

export interface KarnamehColorDto {
    id: number;
    name: string;
}

export interface KarnamehVehicleDto {
    id: string;
    name: string;
}

export interface KarnamehBodyStatusDto {
    id: string;
    locales?: any;
}
