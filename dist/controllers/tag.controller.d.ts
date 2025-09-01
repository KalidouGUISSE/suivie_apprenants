import type { Request, Response } from "express";
export declare class TagController {
    static create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getOne(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=tag.controller.d.ts.map