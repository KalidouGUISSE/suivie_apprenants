export declare class AuthService {
    static login(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    static refreshAccessToken(refreshToken: string): Promise<string>;
}
//# sourceMappingURL=auth.service.d.ts.map