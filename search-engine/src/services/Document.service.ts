import { IResponse } from './response/IResponse';
import { IDocument } from '../domain/models/IDocument.model';
import { GenericService } from './generic-service/Generic.service';

class DocumentService {

  private readonly documentUrl: string = "/page"

  private readonly service: GenericService

  constructor() {
    this.service = new GenericService()
  }

  public async fetchDocuments(keyword: string): Promise<IResponse<IDocument[]>> {
    return this.service.get<IDocument[]>(this.documentUrl + "?keyword=" + keyword, undefined);
  }
}

export default DocumentService