import { User } from "./identity/user"

export interface UserAgentDevice {
    family: string
    major: string
    minor: string
    patch: string
}


export interface UserAgentOs {
    family: string
    major: string
    minor: string
    patch: string
}

export interface UserAgentBrowser {
    family: string
    major: string
    minor: string
    patch: string
}
