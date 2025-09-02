import { HttpStatus } from "../enums/httpStatus.js";
import { SMS,KEY } from "../enums/sms.js";

export const formatSuccess = (data: object | null, code = HttpStatus.OK, message = "ok") => ({
  data, statut: "success", code, message
});
export const formatError = (code: number, message: string) => ({
  data: null, statut: "error", code, message
});
export function buildMessage(key: KEY, sms: SMS): string {
  return `${key} ${sms}`;
}