import { HttpStatus } from "../enums/httpStatus.js";
import { SMS, KEY } from "../enums/sms.js";
export const formatSuccess = (data, code = HttpStatus.OK, message = "ok") => ({
    data, statut: "success", code, message
});
export const formatError = (code, message) => ({
    data: null, statut: "error", code, message
});
export function buildMessage(key, sms) {
    return `${key} ${sms}`;
}
//# sourceMappingURL=responseFormatter.js.map