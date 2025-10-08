export interface EcuType {
    id: number,
    code: string,
    name: string,
    isSelected?: boolean
}

export enum EcuTypes {
    ENGINE,
}

const v1 = ["01", "02", "03", "04", "05", "06", "08", "09", "0A", "0D", "0E", "0F", "10", "11", "12", "13", "14", "FF"];

export function getEcuTypeCode(type: EcuTypes, companyCode: string) {
    if (v1.includes(companyCode)) {
        if(type == EcuTypes.ENGINE) return 1;
        throw new Error('message.ecu-type-code-not-declare');
    } else {
        if(type == EcuTypes.ENGINE) return 17;
        throw new Error('message.ecu-type-code-not-declare');

    }
    return 0;
}
