import { User } from "../identity/user"

export interface TracingLog {
    id: string
    userId: string
    serial: string
    date: string
    filename: string
    appVersion: string
    protocolVersion: string
    Firmware: string
    user: User
}

export interface TracingLogSaveRequest {
    username: string;
    serial: string;
    date: string;
    appVersion: string;
    contents: string[];
    
    protocolVersion?: string;
    firmwareVersion?: string;
}