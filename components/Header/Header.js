import Router from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import NProgress from 'nprogress';

Router.onRouteChangeStart = (url) => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()



export default () => (
  <header className="fixed w-100 top-0">
    <nav className="db dt-l w-100 border-box pa3 ph5-l fw6 ttu tracked bb b--black-10 ">
      <a className="db dtc-l v-mid mid-gray link w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
        <img src="/static/img/k97-sticks-bw.png" className="dib w2 h2" alt="Site Name" />
      </a>

      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l f7 f6-l ">
        <Link href='/'><a className="link dark-gray dib mr3 mr4-l" title="Home">Home</a></Link>
        <Link href='/info'><a className="link dark-gray dib mr3 mr4-l" title="Information">Info</a></Link>
        <Link href='/journal'><a className="link dark-gray dib mr3 mr4-l" title="Journal">Journal</a></Link>
        <Link href='/references'><a className="link dark-gray dib mr3 mr4-l" title="References">References</a></Link>
      </div>

    </nav>
  </header>

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
