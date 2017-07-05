import Link from 'next/link';
import Head from 'next/head';
import Header from '../Header/Header'
import Footer from '../Header/Footer'


export default ({ children, title = 'K97 - Karthik webspace' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.7.4/tachyons.min.css" />
      <link rel="stylesheet" href="/static/css/main-min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
      <link rel="stylesheet" href="/static/css/simplemde.css" />

      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicons/manifest.json" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#cce1f2" />
      <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
      <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#cce1f2" />
    </Head>
    <Header />
    <div className="main-content">
      { children }
    </div>
    <Footer />

  </div>
);
