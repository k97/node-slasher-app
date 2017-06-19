import React from "react";
import Link from "next/link";

import Layout from "../components/Layout/index";
import indexCSS from "styles/home.scss";

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
      <Layout title={"Karthikeyan Rajendran"}>
        <style dangerouslySetInnerHTML={{ __html: indexCSS }} />
        <section className="cd-hero">
          <div className="cd-hero-content">
            <section className="cf bg-blue-hero">

            </section>
          </div>
        </section>
      </Layout>
    );
  }
}

export default HomePage;
