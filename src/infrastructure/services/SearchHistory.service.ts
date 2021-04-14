import { IResponse, ResponseStatus } from './response/IResponse';
import { IDocument } from '../../domain/entities/IDocument.model';
import { GenericService } from './generic-service/Generic.service';

class SearchHistoryService {

  private readonly searchHistoryUrl: string = "/searchHistory"

  private readonly service: GenericService

  constructor() {
    this.service = new GenericService()
  }

  public fetchSearchHistory(keyword: string): Promise<IResponse<string[]>> {
    return this.service.get<string[]>(this.searchHistoryUrl + "?keyword=" + keyword, undefined);
  }

  public deleteSearchHistory(record: string): Promise<IResponse<void>> {
    return this.service.voidDelete(this.searchHistoryUrl + "?keyword=" + record, undefined, undefined);
  }
}

export default SearchHistoryService
