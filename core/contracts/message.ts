import { User } from "./identity/user";

export interface MessageDto {
    userId: string;
    title: string;
    body: string;

    user?: User;
}