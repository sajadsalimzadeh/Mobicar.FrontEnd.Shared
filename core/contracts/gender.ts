import { EnumUtil } from "@framework/utils";

export enum Gender {
    Male = 1,
    Female = 2,
    Other = 3
}

export const GenderOptions = EnumUtil.getKeyValues(Gender);

export function getGenderOptions() {
    return [
        { key: Gender.Male, value: 'مرد' },
        { key: Gender.Female, value: 'زن' },
        { key: Gender.Other, value: 'دیگر' },
    ]
}
