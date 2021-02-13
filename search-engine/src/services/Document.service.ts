import { IResponse } from './response/IResponse';
import Get from './functions/Get';
import { IDocument } from '../domain/models/IDocument.model';

class DocumentService {
  private readonly documentUrl: string = "/page"

  public async fetchDocuments(keyword: string): Promise<IResponse<IDocument[]>> {
    const fetch = new Get<IDocument[]>();
    return fetch.async(this.documentUrl + "?keyword=" + keyword, undefined);
  }
}

export default DocumentService