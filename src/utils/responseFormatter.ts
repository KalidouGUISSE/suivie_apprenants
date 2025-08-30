export const formatSuccess = (data: any, code = 200, message = "") => ({
  data, statut: "success", code, message
});
export const formatError = (code: number, message: string) => ({
  data: null, statut: "error", code, message
});
