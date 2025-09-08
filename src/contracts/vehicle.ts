import { FullEntity } from "@framework/contracts";
import { Color } from "@shared/contracts/color";
import { User } from "@shared/contracts/identity/user";

export interface Vehicle extends FullEntity {
    userId: string;
    colorId: string;
    companyCode: string;
    displayName: string;
    name: string;
    vin: string;
    createdYear: number;
    treePath: string;
    ecus?: VehicleEcu[];
    engineVolume: number;
    plate: VehiclePlate;

    user?: User;
    color?: Color;
}

export interface VehicleSaveRequest {
    userId: string
    driverId: string
    colorId: string
    name: string
    vin: string
    engineVolume: number
    plate: VehiclePlate
}

export interface VehicleEcu {
    ecuTypeCode: number;
    name: string;
    filename: string;

    favoriteParameters: string[]
}

export type VehiclePlateType = 'iran';

export class VehiclePlate {
    readonly $type: VehiclePlateType;

    constructor($type: VehiclePlateType) {
        this.$type = $type;
    }

    toHtml() {
        return '';
    }

    static parse(plate: VehiclePlate) {
        if (plate) {
            if (plate.$type == 'iran') {
                return Object.assign(new VehiclePlateIran(), plate);
            }
        }
        return undefined;
    }
}

export const VehiclePlateTypes: VehiclePlateType[] = ['iran'];

export class VehiclePlateIran extends VehiclePlate {
    numberPartOne?: string;
    character?: string;
    numberPartTwo?: string;
    cityCode?: string;

    constructor() {
        super('iran');
    }

    override toHtml(): string {
        return `
        <div class="flex justify-content-center align-items-center">
            <div>${this.numberPartOne}</div>
            -
            <div>${this.character}</div>
            -
            <div>${this.numberPartTwo}</div>
            -
            <div>ایران</div>
            <div>${this.cityCode}</div>
        </div>
`;
    }
}
