import React, { useEffect, useState } from "react";
import { ThreeDots } from "../../components/ThreeDots";
import { IDocument } from "../../domain/entities/IDocument.model";
import DocumentService from "../../services/Document.service";
import { ResponseStatus } from "../../services/response/IResponse";
import { AppLogger } from "../../utilities/app-logger/AppLogger";
import { LogRecipient } from "../../utilities/app-logger/models/LogRecipient";
import { LogType } from "../../utilities/app-logger/models/LogType";
import css from "./index.module.scss";

export default function Landing() {
  // MARK: Constants & Variables
  const logger = new AppLogger();

  // MARK: Hooks State - Data
  const [documents, setDocuments] = useState<IDocument[]>();

  // MARK: Hooks Effect - Data
  useEffect(() => {
    fetchAllDocuments()
  }, []);

  // MARK: Services
  const documentService = new DocumentService()

  // MARK: Services calls
  async function fetchAllDocuments() {
    documentService.fetchAllDocuments().then(response => {
      if (response.status == ResponseStatus.Success) {
        setDocuments(response.data)
        console.log(response.data)
      } else {
        console.log(response.error)
        logger.log(
          LogType.ERROR,
          LogRecipient.DEVELOPER,
          response.error.getErrorMessage()
        );
      }
    })
  }

  return (
    <div className={css.mainContainer}>
      {documents ? (
        <div className={css.mainWrapper}>
          <div className={css.documentsContainer}>
            {documents.map(document => {
              return (
                <div className={css.document} key={document.id}>
                  {document.id}
                </div>
              )
            })}
          </div>
        </div>
      ) : (
          <div className={css.loadingContainer}>
            <ThreeDots color={"#FFAB73"} />
          </div>
        )}
    </div>
  )
}  