import React, { useEffect, useState } from "react";
import { ThreeDots } from "../../components/ThreeDots";
import { IDocument } from "../../domain/entities/IDocument.model";
import DocumentService from "../../infrastructure/services/Document.service";
import { ResponseStatus } from "../../infrastructure/services/response/IResponse";
import { LogRecipient } from "../../utilities/app-logger/models/LogRecipient";
import { LogType } from "../../utilities/app-logger/models/LogType";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import css from "./index.module.scss";
import { AppLogger } from "../../utilities/app-logger/AppLogger";

export default function Landing() {
  // MARK: Constants & Variables
  const logger = new AppLogger();

  // MARK: Hooks State - Data
  const [isLoading, setLoading] = useState<boolean>(false);
  const [documents, setDocuments] = useState<IDocument[]>();

  // MARK: Services
  const documentService = new DocumentService()

  // MARK: Services calls
  async function fetchDocuments(keyword: string) {
    setLoading(true)
    documentService.fetchDocuments(keyword).then(response => {
      if (response.status == ResponseStatus.Success) {
        setDocuments(response.data)
      } else {
        logger.log(
          LogType.ERROR,
          LogRecipient.DEVELOPER,
          response.error.getErrorMessage()
        );
        setDocuments([])
      }
      setLoading(false)
    })
  }

  // MARK: UI Events
  function onSearchInputChange(keyword: string) {
    fetchDocuments(keyword)
  }

  // MARK: Render
  return (
    <div className={css.mainContainer}>
      <div className={css.mainWrapper}>
        <div className={css.headerContainer}>
          <div className={css.headerWrapper}>
            <div className={css.searchContainer}>
            <div className={css.searchIcon}>
                <i className="las la-search"></i>
              </div>
              <input className={css.searchInput} placeholder="Search documents" onChange={(e) => onSearchInputChange(e.target.value)}>
              </input>
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className={css.loadingWrapper}>
            <div className={css.loadingContainer}>
              <ThreeDots color={"#FF7b54"} />
            </div>
          </div>
        ) : (
            <div className={css.documentsContainer}>
              {documents ? (
                <div className={css.documentsWrapper}>
                  {documents.map(document => {
                    return (
                      <div className={css.document} key={document.url}>
                        <div className={css.fileIcon}>
                          <i className="las la-file-alt"></i>
                        </div>
                        <div className={css.documentDataContainer}>

                          <div className={css.documentNameContainer}>
                            {document.url}
                          </div>
                          <div className={css.documentOccurencesContainer}>
                            Occurences: {document.occurrences}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                  <div></div>
                )}
            </div>
          )}
      </div>
    </div>
  )
}  