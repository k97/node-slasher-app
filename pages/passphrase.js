import React from "react";
import Link from "next/link";

import axios from "axios";

import Layout from "../components/Layout/index";

class PassPhrase extends React.Component {
  constructor() {
    super();
  }



  onClickGoBack() {
   window.history.back()
  }


  render() {
    return (
    <Layout title={"Passphrase"}>
      <div className="body-content">

        <section className="mw5 mw7-ns center bg-white pa3 ph5-ns br2 ba b--black-10">

          <button onClick={this.onClickGoBack.bind(this)}
            className="db f6 link dim br2 ba ph3 pv2 mt1 mb3 mr2 dib ba b--black-50 bg-white black-60">
            <i className="ion-ios-arrow-left"></i> &nbsp; Go Back
          </button>

          <h1 className="mt0">Passphrase</h1>
          <p className="lh-copy measure">Please enter the passphrase to view this part of the website.</p>

          <form className="db w-100 passphrase-form" >
            <input className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph2 border-box" type="text" />
            <button className="input-reset w-100 w-auto-ns bg-blue f2 ph4" type="submit">
              <i className="ion-ios-arrow-thin-right white  v-mid"></i>
            </button>
          </form>

          <div className="lh-copy mt3 mb4 black-60">
            <small className="f6">
            Some of the projects are locked down in adherence to the respective NDA(s). I intend to share these work only if required for referential purposes. <a className="ka-link dim">Drop me a message here,</a> to recieve the passphrase.
            </small>
          </div>

        </section>

      </div>
    </Layout>
    );
  }
}

export default PassPhrase;
