import Link from 'next/link';
import Head from 'next/head';
import Header from '../Header/Header'

export default ({ children, title = 'Next.js / Express App' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel="stylesheet" href="/static/styles.css" />
    </Head>

    <Header />

    { children }

    <div className='container'>
      <footer className='footer'>
        &copy; 2017 - karthik
      </footer>
    </div>
  </div>
);
