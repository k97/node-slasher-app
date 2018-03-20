import React from "react";
import Link from "next/link";

import Layout from "../components/Layout/index";

class HomePage extends React.Component {

  heroText() {
    return (
      <section className="ph5-ns hero--txt ft-head">
        <h1 className="b f3 f2-ns black-70 mv0 pb0 kmain">
          Hello! I'm Karthik,
        </h1>

        <p className="f5 db fw5 black-50 tracked ft-serif mt2 mb2 p0">
          Product Designer living in Melbourne, Australia.
        </p>

        <Link href='/resume'>
        <a className="ka-hero-link mw8-l">
          <span>Check out my resume</span>
          <i className="ion-ios-arrow-thin-right"></i>
        </a>
        </Link>

        <div className="ka-icon-set">
          <a href="https://github.com/k97" target="_blank" className="github">
            <i className="ion-social-github-outline"></i>
          </a>

          <a href="https://twitter.com/k97co" target="_blank" className="twitter">
            <i className="ion-social-twitter-outline"></i>
          </a>

          <a href="https://www.linkedin.com/in/rajendrankarthikeyan/" target="_blank" className="linkedin">
            <i className="ion-social-linkedin-outline"></i>
          </a>

          <a href="/info" className="info" title="Build info for this site">
            <i className="ion-ios-information-outline"></i>
          </a>
        </div>

      </section>
    );
  }


  heroComponent() {
    return (
      <div className="hero-img">
        <div className="hero-content">
          <span className="hero-img-wrapper"><img src="../static/img/k97-retro.png" /></span>
          <span className="hero-img-wrapper hero-bg-circle hero-bg-circle-one"></span>
          <span className="hero-img-wrapper hero-bg-circle hero-bg-circle-two"></span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Layout title={"Karthik Rajendran - Product Designer & Developer"}>
        <style global jsx>{`
            .blue-index-bg {
              background-image: -webkit-linear-gradient(136deg, #e7f2ff 42%, #eefaff 63%);
              background-image: -o-linear-gradient(136deg, #e7f2ff 42%, #eefaff 63%);
              background-image: linear-gradient(-46deg, #e7f2ff 42%, #eefaff 63%);
            }
            .knav a:nth-child(1) {
              padding: 1.72em 0 1.75em;
              border: solid #5F91F5;
              border-width: 2px 0 0 0;
              color: #5F91F5;
            }
            .kheader {
              position: fixed;
              top: inherit;
              bottom: 0;
              box-shadow: 0px -12px 25px 0px rgba(0, 0, 0, 0.09);
            }
            .klogo {
              display: none;
            }
            .knav {
              text-align: center;
            }
            .knav a {
              margin: 0px 5%;
            }
            .kfooter {
              display: none;
            }
          `}
        </style>

        <section className="blue-index-bg">
            <div className="w-2k-center vh-100 dt w-100 relative top--2">
              <div className="dtc v-mid">
                <section className="cf ">
                  <div className="fl w-100 w-100-m w-50-l w-100-ns">
                    {this.heroText()}
                  </div>

                  <div className="fl w-50 dn-m hero-img-container">
                    {this.heroComponent()}
                  </div>
                </section>

              </div>
            </div>
        </section>
      </Layout>
    );
  }
}

export default HomePage;
