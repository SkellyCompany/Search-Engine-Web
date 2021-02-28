import { BaseError } from "../../domain/errors/Base.error";
import { IFetchable } from "../../domain/entities/marker/Fetchable.marker";

export interface IResponse<T extends IFetchable | void>{
    status: ResponseStatus;
    data?: T;
    error?: BaseError;
}

export enum ResponseStatus {
    Success,
    Error
}