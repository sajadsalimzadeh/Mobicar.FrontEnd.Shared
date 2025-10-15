
export interface Code {
    code: string
}

export interface TranslateRequest {
    language: string
    deviceSerial: string
    latitude?: number
    longitude?: number
    altitude?: number
    ecuFullId?: string
    deviceInfo?: string
    codes: Code[]
}

export interface TranslateResponse {
    id: string;
    encryptedCode: string;
    title: string;
}

export interface DtcTranslateRequest {
    deviceSerial: string;
    ecuFilename: string;
    language?: string;
    latitude?: number;
    longitude?: number;

    encryptedCodes: string[];
}

export interface DtcTranslateResponse {
    encryptedCode: string;
    code: string;
    description: string;
}

export interface TranslateRequestRecord extends DtcTranslateRequest {
    id: number;
}