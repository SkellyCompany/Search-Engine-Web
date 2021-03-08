import { BaseError } from '../Base.error';

export class ServiceError extends BaseError {
    public getErrorMessage(): string {
        return this.message
    }
}