import { SingletonRouter } from "next/dist/client/router";

export interface IDocument {
    docId: string
    url: string
    occurence: number
}