import Head from 'next/head';
import Link from 'next/link';
import NProgress from 'nprogress';

class Header extends React.Component {

render() {
  return (
    <header className="fixed w-100 top-0 bg-white">
      <nav className="db dt-l w-100 border-box pa3 ph5-l fw6 ttu tracked bb b--black-10 ">
        <Link href='/'>
          <a className="db dtc-l v-mid mid-gray link w-100 w-25-l tc tl-l mb2 mb0-l" title="Home">
            <img src="/static/img/k97-sticks-bw.png" className="dib w2 h2" alt="K97 Logo" />
          </a>
        </Link>

        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l f6 fw6">
          <Link href='/'>
            <a className="hover-blue link black-70 mr2 mr3-m mr4-l dib" title="Home">Home</a>
          </Link>
          <Link href='/info'>
            <a className="hover-blue link black-70 mr2 mr3-m mr4-l dib" title="Information">Info</a>
          </Link>
          <Link href='/journal'>
            <a className="hover-blue link black-70 mr2 mr3-m mr4-l dib" title="Journal">Journal</a>
          </Link>
          <Link href='/Labs'>
            <a className="hover-blue link black-70 mr2 mr3-m mr4-l dib" title="References">Labs</a>
          </Link>
        </div>

      </nav>
    </header>
    );
  }
}

export default Header
