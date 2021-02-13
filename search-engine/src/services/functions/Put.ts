import { ParseError } from "../../domain/errors/services/ParseError";
import { IFetchable } from "../../domain/models/marker/Fetchable.marker";
import Client from "../../infrastructure/Client";
import { IResponse } from "../response/IResponse";
import { ResponseStatus } from "../response/ResponseStatus";

class Put<T extends IFetchable>{
  public async async(url: string, data: any, token: string): Promise<IResponse<T>> {
    const client = new Client();
    return client
      .put(url, data, token)
      .then((res) => {
        const updatedData: T = res;
        if (updatedData) {
          const response: IResponse<T> = {
            status: ResponseStatus.Success,
            data: updatedData,
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
}

export default Put