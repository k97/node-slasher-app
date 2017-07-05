import React from "react";
import Link from "next/link";
import Router from 'next/router';

import axios from "axios";

import Layout from "../components/Layout/index";
import DisplayAlert from "../components/Home/DisplayAlert";
import UILoader from '../components/Home/UILoader';

class Passphrase extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      alertInfo: {
        type: 'success',
        isVisible: false
      }
    }
    this.onSubmitPass = this.onSubmitPass.bind(this);
    this.setupAlert = this.setupAlert.bind(this);
    this.navigateAway = this.navigateAway.bind(this);
    this.onValidatePassphrase = this.onValidatePassphrase.bind(this);
  }

  navigateAway() {
    var locHash = location.hash;
    if (locHash) {
      let wPage = locHash.split('#')[1];
      Router.push("/work/" + wPage);
    } else {
      Router.push("/work");
    }
  }

  setupAlert(isSuccess, msg) {
    let isVisible = true;
    let type = isSuccess ? 'success' : 'error';
    this.setState({ alertInfo: { type, isVisible, msg } });
  }

  onValidatePassphrase(details) {
    this.setState({ loading: true });
    axios.post('/api/passphrase/login', details)
      .then(response => {
        const alertVal = response.data;
        let isSuccess = false;
        if (alertVal.auth) {
          sessionStorage.setItem('k97passphrase', true);
          setTimeout(this.navigateAway, 1200);
        } else {
          sessionStorage.removeItem('k97passphrase');
        }
        this.setupAlert(alertVal.auth, alertVal.message);
        this.setState({ loading: false });
      }).catch(error => {
        console.error(error);
        this.setState({ loading: false });
      });
  }

  onSubmitPass(event) {
    event.preventDefault();
    let userDetails = {
      passphrase: this.passphrase.value
    };
    this.onValidatePassphrase(userDetails);
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

            <form className="db w-100 passphrase-form" onSubmit={(e) => this.onSubmitPass(e)}>
              <input type="text" ref={input => this.passphrase = input} className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph2 border-box" required />
              <button className="input-reset w-100 w-auto-ns bg-blue f2 ph4" type="submit">
                <i className="ion-ios-arrow-thin-right white  v-mid"></i>
              </button>
            </form>

            <UILoader loading={this.state.loading} />

            <span className="db mt3">
              {
                this.state.alertInfo.isVisible
                  ? <DisplayAlert type={this.state.alertInfo.type} msg={this.state.alertInfo.msg} />
                  : ''
              }
            </span>

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

export default Passphrase;
