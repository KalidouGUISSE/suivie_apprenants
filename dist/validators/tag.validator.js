import { z } from "zod";
// Importe la bibliothèque Zod, utilisée pour valider et typer les données (ici, les objets reçus dans les requêtes).
export const createTagSchema = z.object({
    nom: z.string().min(2, "Au moins 2 caractères requis"),
});
// Définit un schéma de validation pour la création d’un tag.
// Le champ 'nom' doit être une chaîne de caractères d’au moins 2 caractères.
// Si la condition n’est pas respectée, le message "Nom obligatoire" sera retourné.
export const updateTagSchema = z.object({
    nom: z.string().min(2, "Au moins 2 caractères requis").optional(),
});
// Crée des types TypeScript à partir des schémas Zod.
// Cela permet d’avoir une vérification de type automatique dans le reste du code (services, contrôleurs, etc.).
//# sourceMappingURL=tag.validator.js.map