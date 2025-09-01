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
// Définit un schéma de validation pour la modification d’un tag.
// Le champ 'nom' est optionnel, mais s’il est présent, il doit avoir au moins 2 caractères.

export type CreateTagInput = z.infer<typeof createTagSchema>;
export type UpdateTagInput = z.infer<typeof updateTagSchema>;
// Crée des types TypeScript à partir des schémas Zod.
// Cela permet d’avoir une vérification de type automatique dans le reste du code (services, contrôleurs, etc.).