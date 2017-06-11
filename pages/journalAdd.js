import React from "react";
import Link from "next/link";
import axios from "axios";

import Layout from "../components/Layout/index";
import AddForm from "../components/Journal/AddForm";
import JournalPost from "../components/Journal/Post";

class AddJournal extends React.Component {
  constructor() {
    super();
    this.state = {
      newPost: {},
      isPostReady: false,
      displayFlags: {
        showAdd: true,
        showPreview: false,
        showSuccessAlert: true,
        showErrorAlert : false
      }
    };
    this.newPost = this.newPost.bind(this);
    this.setPostReady = this.setPostReady.bind(this);
    this.displayAlert = this.displayAlert.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  setPostReady(isPostReady) {
    this.setState({ isPostReady })
  }

  newPost(newPost) {
    this.setState({ newPost })
    if(!this.state.isPostReady) return;
    axios.post('/api/journal/create', newPost)
      .then(response => {
        this.handleResponse(response);
      }).catch(error => {
        console.error(error);
        this.setState({ loading: false });
      });
  }


  handleResponse(val) {
    if(val.status == 200) {
      const createdVal = val.data;
      this.setState({ newPost: createdVal, showSuccessAlert: true, showErrorAlert: false });
    } else {
      this.setState({ newPost: this.state.newPost, showSuccessAlert: false, showErrorAlert: true });
    }
  }


  displayAlert() {
    return (
        <section
          className={`flex items-center justify-center pa4 white bg-green ${this.state.displayFlags.showSuccessAlert ? "bb" : ""}`}>
          <span className="lh-title ml3">Some info that you want to call attention to.</span>
        </section>
    );
  }

  toggleView(currentTab) {
    let displayFlags;
    if (currentTab == "add") {
      displayFlags = { showAdd: true, showPreview: false };
    } else {
      displayFlags = { showAdd: false, showPreview: true };
    }
    this.setState({ displayFlags });
  }

  render() {
    return (
      <Layout title={"New Journal"}>
        <div className="body-content">
          <div className="ph4 bt bb b--black-10 f5 bg-white">
            <a className={`link dib ph4 pv3 b--black-50 black-60 bw1 ${this.state.displayFlags.showAdd ? "bb fw5" : ""}`}
              onClick={this.toggleView.bind(this, "add")}>
              Add
            </a>
            <a className={`link dib ph4 pv3 b--black-50 black-60 bw1 ${this.state.displayFlags.showPreview ? "bb fw5" : ""}`}
              onClick={this.toggleView.bind(this, "preview")}>
              Preview
            </a>
          </div>

          {this.displayAlert}
          <section className="w-100">
            <div
              className="cf"
              className={this.state.displayFlags.showAdd ? "" : "dn"}
            >
              <AddForm newPost={this.newPost} setPostReady={this.setPostReady} />
            </div>
            <div
              className="cf"
              className={this.state.displayFlags.showPreview ? "" : "dn"}
            >
              <h1 className="pv2 ph5"> Preview Post</h1>
              <JournalPost detail={this.state.newPost} />
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default AddJournal;
