import type { Request, Response } from "express";
export declare class ProfileController {
    static getProfiles(_: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static createProfile(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getProfileById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static updateProfile(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static deleteProfile(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=profile.controller.d.ts.map