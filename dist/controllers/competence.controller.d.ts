import type { Request, Response } from "express";
export declare class CompetenceController {
    static create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getOne(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getNiveaux(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=competence.controller.d.ts.map