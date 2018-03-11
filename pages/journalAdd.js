import React from "react";
import Link from "next/link";
import axios from "axios";

import Layout from "../components/Layout/index";
import JournalForm from "../components/Journal/JournalForm";
import JournalPost from "../components/Journal/Post";
import DisplayAlert from "../components/Home/DisplayAlert";

class JournalAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      newPost: {},
      isPostReady: false,
      alertInfo: {
        type: 'success',
        isVisible: false
      },
      displayFlags: {
        showAdd: true,
        showPreview: false
      }
    };
    this.savePost = this.savePost.bind(this);
    this.setPostReady = this.setPostReady.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  setPostReady(isPostReady) {
    this.setState({ isPostReady })
  }

  savePost(postObj) {
    this.setState({ postObj })
    if(!this.state.isPostReady) return;
    axios.post('/api/journal/create', postObj)
      .then(response => {
        this.handleResponse(response);
      }).catch(error => {
        console.error(error);
        this.setState({ loading: false });
      });
  }


  handleResponse(val) {
    let alertInfo = this.state.alertInfo;
    alertInfo.isVisible = true;
    if(val.status == 200) {
      const createdVal = val.data;
      this.setState({ newPost: createdVal });
    } else {
      if(response.status !== 200) this.state.alertInfo.type = 'error';
      this.setState({ alertInfo, newPost: this.state.newPost });
    }
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
            <div className="w-2k-center">
              <a className={`link dib ph4 pv3 b--black-50 black-60 bw1 ${this.state.displayFlags.showAdd ? "bb fw5" : ""}`}
                onClick={this.toggleView.bind(this, "add")}>
                Add
              </a>
              <a className={`link dib ph4 pv3 b--black-50 black-60 bw1 ${this.state.displayFlags.showPreview ? "bb fw5" : ""}`}
                onClick={this.toggleView.bind(this, "preview")}>
                Preview
              </a>
            </div>
          </div>

          <section className="w-2k-center  w-100">

            {/*FORM VIEW*/}
            <div className="cf" className={this.state.displayFlags.showAdd ? "" : "dn"}>
              {this.state.alertInfo.isVisible ? <span className="db ph5 mt4"><DisplayAlert type={this.state.alertInfo.type} /></span> : '' }

              <JournalForm setPostReady={this.setPostReady} savePost={this.savePost} newPost={this.state.newPost} editMode={false}/>
            </div>

            {/*PREVIEW*/}
            <div className="cf" className={this.state.displayFlags.showPreview ? "" : "dn"}>
              <h1 className="pv2 ph5"> Preview Post</h1>
              <JournalPost detail={this.state.newPost} />
            </div>

          </section>
        </div>
      </Layout>
    );
  }
}

export default JournalAdd;
