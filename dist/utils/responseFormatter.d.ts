<<<<<<< HEAD
export declare const formatSuccess: (data: any, status?: number, message?: string) => {
    status: number;
    success: boolean;
    message: string;
    data: any;
};
export declare const formatError: (status: number, message: string, errors?: any) => {
    status: number;
    success: boolean;
    message: string;
    errors: any;
=======
export declare const formatSuccess: (data: object | null, code?: number, message?: string) => {
    data: object | null;
    statut: string;
    code: number;
    message: string;
};
export declare const formatError: (code: number, message: string) => {
    data: null;
    statut: string;
    code: number;
    message: string;
>>>>>>> 7cce4fc1f9d7c0d3a046be61d9965a32f61dc7cd
};
//# sourceMappingURL=responseFormatter.d.ts.map