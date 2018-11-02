export interface TokenResponse {
    token: string;
}
export interface TokenPayload {
    email: string;
    firstName?: string;
    lastName?: string;
    password: string;
    userType?: String;
}
