import React from "react";
import System from "../global/System.info";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
    render() {
      return (
        <Html>
          <Head>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${System.gaTrackingId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${System.gaTrackingId}', {
                page_path: window.location.pathname,
              });
            `,
              }}
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }