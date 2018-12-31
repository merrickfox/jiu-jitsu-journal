import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import JssProvider from 'react-jss/lib/JssProvider';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>

          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          <link rel="manifest" href="/static/manifest.json" />

        </Head>
        <body>
          <Main />
          <NextScript />

        </body>


      </html>
    );
  }
}


export default MyDocument;
