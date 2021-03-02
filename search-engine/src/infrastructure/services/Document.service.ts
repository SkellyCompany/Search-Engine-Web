import { IResponse, ResponseStatus } from './response/IResponse';
import { IDocument } from '../../domain/entities/IDocument.model';
import { GenericService } from './generic-service/Generic.service';

class DocumentService {

  private readonly documentUrl: string = "/term"
  private readonly allDocumentsUrl: string = "/document/all"

  private readonly service: GenericService

  constructor() {
    this.service = new GenericService()
  }

  public fetchAllDocuments(): Promise<IResponse<IDocument[]>> {
    return this.service.get<IDocument[]>(this.allDocumentsUrl, undefined);
  }

  public async fetchDocuments(keyword: string): Promise<IResponse<IDocument[]>> {
    const documentsResponse = await this.service.get<IDocument[]>(this.documentUrl + "?keyword=" + keyword, undefined);
    if(documentsResponse.status == ResponseStatus.Success) {
      documentsResponse.data = documentsResponse.data.sort((docA, docB) => {
        return docB.occurence - docA.occurence
      })
    }
    return documentsResponse
  }
}

export default DocumentService