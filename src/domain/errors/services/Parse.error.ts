import { ServiceError } from './Service.error';

export class ParseError extends ServiceError {
    constructor(message: string) {
        super(message)
    }
}