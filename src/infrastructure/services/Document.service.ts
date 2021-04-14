import { IResponse, ResponseStatus } from './response/IResponse';
import { IDocument } from '../../domain/entities/IDocument.model';
import { GenericService } from './generic-service/Generic.service';

class DocumentService {

  private readonly documentUrl: string = "/document"

  private readonly service: GenericService

  constructor() {
    this.service = new GenericService()
  }

  public async fetchDocuments(keyword: string): Promise<IResponse<IDocument[]>> {
    const documentsResponse = await this.service.get<IDocument[]>(this.documentUrl + "?term=" + keyword, undefined);
    if (documentsResponse.status == ResponseStatus.Success) {
      documentsResponse.data = documentsResponse.data.sort((docA, docB) => {
        return docB.occurrences - docA.occurrences
      })
    }
    return documentsResponse
  }
}

export default DocumentService
