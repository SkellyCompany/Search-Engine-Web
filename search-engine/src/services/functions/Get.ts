import { ParseError } from "../../domain/errors/services/Parse.error";
import { IFetchable } from "../../domain/models/marker/Fetchable.marker";
import Client from "../../infrastructure/Client";
import { IResponse } from "../response/IResponse";
import { ResponseStatus } from "../response/ResponseStatus";

class Get<T extends IFetchable>{
  public async async(url: string, token: string): Promise<IResponse<T>> {
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
}

export default Get