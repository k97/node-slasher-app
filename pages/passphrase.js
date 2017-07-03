import React from "react";
import Link from "next/link";
import Router from 'next/router';

import axios from "axios";

import Layout from "../components/Layout/index";
import DisplayAlert from "../components/Home/DisplayAlert";

class PassPhrase extends React.Component {
  constructor() {
    super();
    this.state = {
      alertInfo: {
        type: 'success',
        isVisible: false
      }
    }
    this.onSubmitPass = this.onSubmitPass.bind(this);
    this.onValidatePassPhrase = this.onValidatePassPhrase.bind(this);
  }

  displayError(){

  }

  onValidatePassPhrase(details){
    axios.post('/api/passphrase/login', details)
      .then(response => {
        if(response.data.auth) {
          sessionStorage.setItem('k97passphrase',true);
          var locHash = location.hash;
          this.setState({ showError: false });
          if(locHash) {
            let wPage = locHash.split('#')[1];
            Router.push("/work/" + wPage);
          } else {
            Router.push("/work");
          }
        } else {
          this.setState({ showError: true });
          sessionStorage.removeItem('k97passphrase');
        }
        this.setState({ loading: true });
      }).catch(error => {
        console.error(error);
        this.setState({ loading: false });
      });
  }

  onSubmitPass(event){
    event.preventDefault();
    let userDetails = {
      passphrase: this.passphrase.value
    };
    this.onValidatePassPhrase(userDetails);
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

          {!this.state.showError ? <DisplayAlert type='error' msg="Cool" /> : ''}
          <form className="db w-100 passphrase-form" onSubmit={(e)=>this.onSubmitPass(e)}>
            <input type="text"  ref={input => this.passphrase = input}  className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph2 border-box" required value="embrace" />
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
