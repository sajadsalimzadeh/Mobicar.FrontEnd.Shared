export interface ThirdPartyAccessToken {
    id: string;
    thirdPartyId: string;
    scopes: string[];
    expireTime?: string;
    creationTime: string;
}

type ThirdPartyAccessTokenScope = 'user-info';

export interface ThirdPartyAccessTokenGetRequest {
    scopes?: ThirdPartyAccessTokenScope[];
    expireTime?: string;
}
