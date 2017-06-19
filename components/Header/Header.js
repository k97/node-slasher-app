import Head from 'next/head';
import Link from 'next/link';
import NProgress from 'nprogress';

class Header extends React.Component {

render() {
  return (
    <header className="w-100 fixed top-0 kheader">

      <nav className="db dt-l w-100 border-box pa3 ph5-l ttu tracked bg-white bb b--black-10">
        <Link href='/'>
          <a className="klogo db dtc-l v-mid mid-gray link w-100 w-25-l tc tl-l mb2 mb0-l" title="Home">
            <img src="/static/img/k97-sticks-bw.png" className="dib w2 h2" alt="K97 Logo" />
          </a>
        </Link>

        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l f6 fw6 knav">
          <Link href='/'>
            <a className="hover-blue link black-70 mr2 mr3-m mr5-l dib" title="Home">Home</a>
          </Link>
          <Link href='/about'>
            <a className="hover-blue link black-70 mr2 mr3-m mr5-l dib" title="Information">About</a>
          </Link>
          <Link href='/journal'>
            <a className="hover-blue link black-70 mr2 mr3-m mr5-l dib" title="Journal">Journal</a>
          </Link>
          <Link href='/work'>
            <a className="hover-blue link black-70 mr2 mr3-m mr5-l dib" title="References">Work</a>
          </Link>
        </div>

      </nav>


    </header>
    );
  }
}

export default Header
