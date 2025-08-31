export const formatSuccess = (data: object | null, code = 200, message = "ok") => ({
  data, statut: "success", code, message
});
export const formatError = (code: number, message: string) => ({
  data: null, statut: "error", code, message
});
