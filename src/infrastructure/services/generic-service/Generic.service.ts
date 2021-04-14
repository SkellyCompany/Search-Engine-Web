import { ParseError } from "../../../domain/errors/services/Parse.error";
import { IFetchable } from "../../../domain/entities/marker/Fetchable.marker";
import Client from "../../Client";
import { IResponse, ResponseStatus } from "../response/IResponse";

export class GenericService {
    public async get<T extends IFetchable>(url: string, token: string): Promise<IResponse<T>> {
        const client = new Client();
        return client
            .get(url, token)
            .then((res) => {
                const responseData: T = res;
                if (responseData) {
                    const response: IResponse<T> = {
                        status: ResponseStatus.Success,
                        data: responseData,
                        error: undefined
                    };
                    return response;
                } else {
                    const parseError: ParseError = new ParseError("Could not parse response.")
                    const response: IResponse<T> = {
                        status: ResponseStatus.Error,
                        data: undefined,
                        error: parseError
                    };
                    return response;
                }
            })
            .catch((error) => {
                const response: IResponse<T> = {
                    status: ResponseStatus.Error,
                    data: undefined,
                    error: error
                };
                return response;
            });
    }

    public async post<T extends IFetchable>(url: string, data: any, token: string): Promise<IResponse<T>> {
        const client = new Client();
        return client
            .post(url, data, token)
            .then((res) => {
                const createdData: T = res;
                if (createdData) {
                    const response: IResponse<T> = {
                        status: ResponseStatus.Success,
                        data: createdData,
                        error: undefined
                    };
                    return response;
                } else {
                    const parseError: ParseError = new ParseError("Could not parse response.")
                    const response: IResponse<T> = {
                        status: ResponseStatus.Error,
                        data: undefined,
                        error: parseError
                    };
                    return response;
                }
            })
            .catch((error) => {
                const response: IResponse<T> = {
                    status: ResponseStatus.Error,
                    data: undefined,
                    error: error
                };
                return response;
            });
    }

    public async voidPost(url: string, data: any, token: string): Promise<IResponse<void>> {
        const client = new Client();
        return client
            .post(url, data, token)
            .then(() => {
                const response: IResponse<void> = {
                    status: ResponseStatus.Success,
                    data: undefined,
                    error: undefined
                };
                return response;
            })
            .catch((error) => {
                const response: IResponse<void> = {
                    status: ResponseStatus.Error,
                    data: undefined,
                    error: error
                };
                return response;
            });
    }

    public async put<T extends IFetchable>(url: string, data: any, token: string): Promise<IResponse<T>> {
        const client = new Client();
        return client
            .put(url, data, token)
            .then((res) => {
                const createdData: T = res;
                if (createdData) {
                    const response: IResponse<T> = {
                        status: ResponseStatus.Success,
                        data: createdData,
                        error: undefined
                    };
                    return response;
                } else {
                    const parseError: ParseError = new ParseError("Could not parse response.")
                    const response: IResponse<T> = {
                        status: ResponseStatus.Error,
                        data: undefined,
                        error: parseError
                    };
                    return response;
                }
            })
            .catch((error) => {
                const response: IResponse<T> = {
                    status: ResponseStatus.Error,
                    data: undefined,
                    error: error
                };
                return response;
            });
    }

    public async voidPut(url: string, data: any, token: string): Promise<IResponse<void>> {
        const client = new Client();
        return client
            .put(url, data, token)
            .then(() => {
                const response: IResponse<void> = {
                    status: ResponseStatus.Success,
                    data: undefined,
                    error: undefined
                };
                return response;
            })
            .catch((error) => {
                const response: IResponse<void> = {
                    status: ResponseStatus.Error,
                    data: undefined,
                    error: error
                };
                return response;
            });
    }

    public async delete<T extends IFetchable>(url: string, data: any, token: string): Promise<IResponse<T>> {
        const client = new Client();
        return client
            .delete(url, data, token)
            .then((res) => {
                const createdData: T = res;
                if (createdData) {
                    const response: IResponse<T> = {
                        status: ResponseStatus.Success,
                        data: createdData,
                        error: undefined
                    };
                    return response;
                } else {
                    const parseError: ParseError = new ParseError("Could not parse response.")
                    const response: IResponse<T> = {
                        status: ResponseStatus.Error,
                        data: undefined,
                        error: parseError
                    };
                    return response;
                }
            })
            .catch((error) => {
                const response: IResponse<T> = {
                    status: ResponseStatus.Error,
                    data: undefined,
                    error: error
                };
                return response;
            });
    }

    public async voidDelete(url: string, data: any, token: string): Promise<IResponse<void>> {
        const client = new Client();
        return client
            .delete(url, data, token)
            .then(() => {
                const response: IResponse<void> = {
                    status: ResponseStatus.Success,
                    data: undefined,
                    error: undefined
                };
                return response;
            })
            .catch((error) => {
                const response: IResponse<void> = {
                    status: ResponseStatus.Error,
                    data: undefined,
                    error: error
                };
                return response;
            });
    }
}
