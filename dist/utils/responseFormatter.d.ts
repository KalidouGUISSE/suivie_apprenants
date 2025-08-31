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
};
//# sourceMappingURL=responseFormatter.d.ts.map