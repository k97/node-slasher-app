import Head from 'next/head';
import Link from 'next/link';
import NProgress from 'nprogress';


class Footer extends React.Component {

  render() {
    return (
      <section className="pv4 ph3 ph5-m ph6-l mid-gray">
        <small className="f6 db tc">© 2017 <b className="ttu">Experimental build</b> v6.0.</small>
        <div className="tc mt3">
          <a href="https://github.com/k97" title="My ramblings" target="_blank" className="f6 dib ph2 link mid-gray dim">Twitter</a>
          <a href="https://twitter.com/k97ind" title="My ninjutsus" target="_blank" className="f6 dib ph2 link mid-gray dim">Github</a>
          <a href="https://www.linkedin.com/in/rajendrankarthikeyan/" title="My pro page" target="_blank" className="f6 dib ph2 link mid-gray dim">LinkedIn</a>
        </div>
      </section>
    );
  }

}

export default Footer


