import { ClientError } from './Client.error';

export class NetworkError extends ClientError {
    constructor(message: string, backendMessage: string) {
        super(message, backendMessage)
    }
}