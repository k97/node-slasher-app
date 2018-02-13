import Head from 'next/head';
import Link from 'next/link';

import ReactGA from 'react-ga';


class Footer extends React.Component {

  componentDidMount() {
    ReactGA.initialize('UA-102059710-1')
    ReactGA.pageview(document.location.pathname)
  }

  render() {
    return (
    <div>

      <section className="pv4 ph3 ph5-m ph6-l mid-gray kfooter ft-head">
        <small className="f6 db tc ">
          © 2018 <a href='/info' className="ttu b link no-underline black-70">Experimental build</a> v6.0.
        </small>
        <div className="tc mt3">
          <a href="https://github.com/k97" title="My ramblings" target="_blank" className="f6 dib ph2 link mid-gray dim twitter">Twitter</a>
          <a href="https://twitter.com/k97ind" title="My ninjutsus" target="_blank" className="f6 dib ph2 link mid-gray dim">Github</a>
          <a href="https://www.linkedin.com/in/rajendrankarthikeyan/" title="My pro page" target="_blank" className="f6 dib ph2 link mid-gray dim">LinkedIn</a>
        </div>
      </section>

      </div>
    );
  }

}

export default Footer


