import React, { useEffect, useState } from "react";
import { ThreeDots } from "../../components/ThreeDots";
import { IDocument } from "../../domain/entities/IDocument.model";
import DocumentService from "../../services/Document.service";
import { ResponseStatus } from "../../services/response/IResponse";
import { AppLogger } from "../../utilities/app-logger/AppLogger";
import { LogRecipient } from "../../utilities/app-logger/models/LogRecipient";
import { LogType } from "../../utilities/app-logger/models/LogType";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
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
          <div className={css.headerContainer}>
          <div className={css.headerWrapper}>
            <div className={css.searchContainer}>
              <input className={css.searchInput} placeholder="Search documents">
              </input>
              <div className={css.searchIcon}>
              <i className="las la-search"></i>
              </div>
            </div>
          </div>
          </div> 
          <div className={css.documentsContainer}>
            <div className={css.documentsWrapper}>
            {documents.map(document => {
              return (
                <div className={css.document} key={document.id}>
                  <div className={css.fileIcon}>
                    <i className="las la-file-alt"></i>
                  </div>
                  <div className={css.documentDataContainer}>
                    
                    <div className={css.documentNameContainer}>
                      {document.name}
                    </div>
                    <div className={css.documentIdContainer}>
                      ID: {document.id}
                    </div>
                  </div>
                </div>
              )
            })}
            </div>
            
          </div>
        </div>
      ) : (
          <div className={css.loadingContainer}>
            <ThreeDots color={"#FF7b54"} />
          </div>
        )}
    </div>
  )
}  