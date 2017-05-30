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
      <link rel="stylesheet" href="/static/css/tachyons.css" />
      <link rel="stylesheet" href="/static/css/nprogress.css" />
      <link rel="stylesheet" href="/static/css/main.css" />
    </Head>

    <div className="main-content">
      { children }
    </div>
    <Footer />

  </div>
);
