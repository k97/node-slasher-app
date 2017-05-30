import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout/index';

class HomePage extends React.Component {

  heroText() {
    return (
      <section className="pv6-m pv7-l ph5-ns hero--txt">
        <h1 className="b f3 f2-ns black-70 lh-solid mb0">
          Karthikeyan Rajendran
        </h1>
        <p className="f5 db fw5 ttu lh-solid sec-clr tracked">
          User Interface Developer
        </p>
      </section>
    );
  }


  render() {
    return (
      <Layout title={ 'Karthikeyan Rajendran' }>
        <section className="hero cover bg-left bg-center-l">
          <div className="cf bg-blue-hero">

            <div className="fl w-50">
              {this.heroText()}
            </div>

            <div className="fl w-50">
              <div className="hero--img" />
            </div>

          </div>
        </section>
      </Layout>
    );
  }

}

export default HomePage;
