import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import Header from '../components/Header/Header'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    return { html, head };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/static/css/tachyons.css" />
          <link rel="stylesheet" href="/static/css/nprogress.css" />
          <link rel="stylesheet" href="/static/css/main.css" />
        </Head>
        <body>
          {this.props.customValue}
          <Header />
          <main className="main-content">
            <Main />
          </main>
          <NextScript />
        </body>
      </html>
    );
  }
}
