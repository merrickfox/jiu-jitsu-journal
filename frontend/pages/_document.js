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
					<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
								integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
								crossOrigin="anonymous" />


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
