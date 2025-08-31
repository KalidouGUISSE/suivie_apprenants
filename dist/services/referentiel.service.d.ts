export declare class ReferentielService {
    static getAll(): Promise<{
        libelle: string;
        id: number;
    }[]>;
    static getCompetencesByReferentiel(idRerentiel: number): Promise<({
        competences: {
            libelle: string;
            id: number;
        }[];
    } & {
        libelle: string;
        id: number;
    }) | null>;
}
//# sourceMappingURL=referentiel.service.d.ts.map