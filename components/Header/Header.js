import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'

Router.onRouteChangeStart = (url) => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const linkStyle = {
  margin: '0 10px 0 0'
}

export default () => (
  <div style={{ marginBottom: 0 }}>
    <Head>
      <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
    </Head>
    <Link href='/'><a style={linkStyle}>Home</a></Link>
    <Link href='/about'><a style={linkStyle}>About</a></Link>
    <Link href='/forever'><a style={linkStyle}>Forever</a></Link>
    <Link href='/non-existing'><a style={linkStyle}>Non Existing Page</a></Link>

  </div>
)


/**
 *


// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// and use it manually

function onClickHandler (href) {
  return (e) => {
    e.preventDefault()
    Router.push(href)
  }
}

const Link = ({ children, href }) => (
  <a href='#' onClick={onClickHandler(href)}>
    {children}
    <style jsx>{`
      a {
        margin-right: 10px;
      }
    `}</style>
  </a>
)
*/
