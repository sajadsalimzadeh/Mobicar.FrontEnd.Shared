import { FullEntity } from "@framework/contracts"
import { EnumUtil } from "@framework/utils"

export interface Screen extends FullEntity {
    name: string;
    description: string;
    usage: ScreenUsage;
    fields: ScreenField[];
}

export enum ScreenUsage {
    Transition = 0,
    TransitionFunction = 1,
}

export const screenUsages = EnumUtil.getObject(ScreenUsage);

export interface ScreenSaveRequest {
    id: any
    name: string
    description: string
    fields: ScreenField[]
}

export interface ScreenField {
    id: string;
    name: string;
    label: string;
    type: ScreenFieldType;
    isRequired: boolean;
    defaultValue: string;
    pattern: string;
    patternErrorMessage: string;
    min: number;
    max: number;
    maxLength: number;
    minLength: number;
    items: Item[];
    class: string;
    color: string;
    padding: string;
    margin: string;
    rtl: boolean;
}

export enum ScreenFieldType {
    InputText = 0,
    MultiLineInputText = 1,
    Number = 2,
    DropDownList = 3,
    CheckBox = 4,
    MultiCheckbox = 5,
    RadioButton = 6,
    DatePicker = 7,
    DateTimePicker = 8,
    PersianDatePicker = 9,
    PersianDateTimePicker = 10,
    TimePicker = 11,

    
    Span = 90,
    Label = 91,
    Paragraph = 92,
    H1 = 93,
    H2 = 94,
    H3 = 95,
    H4 = 96,
    H5 = 97,
    H6 = 98,
}

export const screenFieldTypeOption = EnumUtil.getKeyValues(ScreenFieldType);

export interface ScreenFieldData {
}


export interface Item {
    key: string
    value: string
}
