import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout/index';
import Tacho from '../components/Home/Tacho';
import indexCSS from 'styles/home.scss'

class HomePage extends React.Component {


  heroText() {
    return (
      <section className="pv6-m pv7-l ph5-ns hero--txt">
        <h1 className="b f3 f2-ns black-70 lh-solid mb0">
          Karthikeyan Rajendran
        </h1>
        <p className="f5 db fw5 ttu lh-solid yellow-txt tracked">
          User Interface Developer
        </p>
      </section>
    );
  }

  render() {
    return (
      <Layout title={ 'Karthikeyan Rajendran' }>
        <style dangerouslySetInnerHTML={{ __html: indexCSS }} />
        <div className="hero cover bg-left bg-center-l">
          <section className="cf bg-blue-hero">

            <div className="fl w-100 w-50-ns">
             {/*  {this.heroText()} */}
            </div>

            <div className="fl w-100 w-50-ns seiso-tach-container">
              {/* <Tacho />*/}
            </div>

          </section>
        </div>
      </Layout>
    );
  }

}

export default HomePage;
