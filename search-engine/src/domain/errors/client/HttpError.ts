import { ClientError } from "./ClientError";

export class HttpError extends ClientError {
    statusCode: number;

    constructor(statusCode: number, message: string, backendMessage: string) {
        super(message, backendMessage)
        this.statusCode = statusCode
    }
}