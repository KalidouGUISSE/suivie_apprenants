import type { Request, Response } from "express";
export declare class AuthController {
    static login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static refreshToken(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static logout(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=auth.controller.d.ts.map