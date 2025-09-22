export class MainHubMessagePayload {
    readonly type: string;

    protected constructor(type: string) {
        this.type = type;
    }
}

export interface MainHubMessage<T extends MainHubMessagePayload> {
    connectionId: string;
    name: string;
    payload: T;
}
