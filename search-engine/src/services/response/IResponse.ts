import { BaseError } from '../../domain/errors/BaseError';
import { IFetchable } from '../../domain/models/marker/Fetchable.marker';
import { ResponseStatus } from "./ResponseStatus";

export interface IResponse<T extends IFetchable>{
    status: ResponseStatus;
    data?: T;
    error?: BaseError;
}