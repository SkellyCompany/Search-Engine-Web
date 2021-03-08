import { BaseError } from '../Base.error';

export class ClientError extends BaseError {
    backendMessage: string;

    constructor(message: string, backendMessage: string) {
        super(message)
        this.backendMessage = backendMessage
    }

    getErrorMessage(): string {
        return this.message + "\n\n" + this.backendMessage
    }
}