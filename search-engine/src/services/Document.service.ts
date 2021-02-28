import { IResponse } from './response/IResponse';
import { IDocument } from '../domain/entities/IDocument.model';
import { GenericService } from './generic-service/Generic.service';

class DocumentService {

  private readonly documentUrl: string = "/document"

  private readonly service: GenericService

  constructor() {
    this.service = new GenericService()
  }

  public fetchAllDocuments(): Promise<IResponse<IDocument[]>> {
    return this.service.get<IDocument[]>(this.documentUrl, undefined);
  }

  public async fetchDocuments(keyword: string): Promise<IResponse<IDocument[]>> {
    return this.service.get<IDocument[]>(this.documentUrl + "?keyword=" + keyword, undefined);
  }
}

export default DocumentService