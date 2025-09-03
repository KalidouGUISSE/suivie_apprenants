export enum Message {
  CREATED_SUCCESS                 = "créée avec succès",
  UPDATED_SUCCESS                 = "mise à jour",
  DELETED_SUCCESS                 = "supprimée",
  NOT_FOUND                       = "non trouvée",
  SERVER_ERROR                    = "Erreur serveur",
  UPDATE_ERROR                    = "Erreur mise à jour",
  IDENTIFIANTS_INVALIDE           = "Identifiants invalides",
  REFREAH_TOKEN_MANQANT           = "Refresh token manquant",
  REFREAH_TOKEN_INVALIDE          = "Refresh token invalide",
  USER_NOT_FOUND                  = "Utilisateur introuvable",
  TOKEN_INVALIDE_OR_EXPIRE        = "Refresh token invalide ou expiré"
}

export enum KEY {
  PROMU                           = "Promo",
  COMPETENCE                      = "Competence",
  SUCCESS                         = "success",
  ERROR                           = "error",
  PRODUCTION                      = "production",
  
}

export enum ExpiresIn{
  _1H                   = "1h",
  _24H                  = "24h"
}