

export interface Code {
    code: string
}

export interface DiagTranslateRequest {
    language: string
    deviceSerial: string
    latitude?: number
    longitude?: number
    altitude?: number
    ecuFullId?: string
    deviceInfo?: string
    codes: Code[]
}

export interface DiagTranslateResponse {
    id: string;
    encryptedCode: string;
    title: string;
}

export interface DiagDtcTranslateRequest {
    deviceSerial: string;
    ecuFilename: string;
    language?: string;
    latitude?: number;
    longitude?: number;

    encryptedCodes: string[];
}

export interface DiagTranslateRequestRecord extends DiagDtcTranslateRequest {
    id: number;
}

export interface DiagDtcTranslateResponse {
    encryptedCode: string;
    code: string;
    description: string;
}
