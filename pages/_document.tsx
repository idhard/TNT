import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="manifest" href="/static/manifest.json" />

          <title>My page</title>
        </Head>
        <body className="app">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
