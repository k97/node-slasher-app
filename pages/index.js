import React from "react";
import Link from "next/link";

import Layout from "../components/Layout/index";
import indexCSS from "styles/home.scss";

class HomePage extends React.Component {
  heroText() {
    return (
      <section className="pv7 ph5-ns hero--txt ft-head">

        <h1 className="b f3 f2-ns black-70 mb0 pb0 kmain">
          Karthikeyan Rajendran
        </h1>

        <p className="f5 db fw5 ttu black-40 tracked ft-serif mt2 mb2 p0">
          User Interface Developer
        </p>

        <a className="ka-hero-link" target="_blank" href="https://bit.ly/k97resume">
          <span>Check out my resume</span>
          <i className="ion-ios-arrow-thin-right"></i>
        </a>

        <div className="ka-icon-set">
          <a href="https://github.com/k97" target="_blank" className="github">
            <i className="ion-social-github-outline"></i>
          </a>

          <a href="https://twitter.com/k97ind" target="_blank" className="twitter">
            <i className="ion-social-twitter-outline"></i>
          </a>

          <a href="https://www.linkedin.com/in/rajendrankarthikeyan/" target="_blank" className="linkedin">
            <i className="ion-social-linkedin-outline"></i>
          </a>
        </div>

      </section>
    );
  }


  heroComponent(){
    return (
      <div className="hero-img">
        <div className="hero-content">
          <span className="hero-img-wrapper"><img src="../static/img/k97-sticks-bw.png" /></span>
          <span className="hero-img-wrapper hero-bg-circle hero-bg-circle-one"></span>
          <span className="hero-img-wrapper hero-bg-circle hero-bg-circle-two"></span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Layout title={"Karthikeyan Rajendran"}>
        <style dangerouslySetInnerHTML={{ __html: indexCSS }} />
        <section className="cf ">
          <div className="fl w-100 w-100-m w-50-l w-100-ns">
            {this.heroText()}
          </div>

          <div className="fl w-50 seiso-tach-container dn-m">
            {this.heroComponent()}
          </div>
        </section>
      </Layout>
    );
  }
}

export default HomePage;
