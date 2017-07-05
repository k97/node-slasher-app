import React from 'react';
import axios from 'axios';

import Layout from '../components/Layout/index';
import JournalPost from '../components/Journal/Post';
import JournalForm from "../components/Journal/JournalForm";
import DisplayAlert from "../components/Home/DisplayAlert";
import UILoader from '../components/Home/UILoader';

class JDetail extends React.Component {

  static getInitialProps({ query: journalVal }) {
    return { journalVal };
  }

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      loading: true,
      journalDetail: {},
      alertInfo: {
        type: 'success',
        isVisible: false
      }
    };
    this.setPostReady = this.setPostReady.bind(this);
    this.fetchJournalDetail = this.fetchJournalDetail.bind(this);
    this.updateJournalDetail = this.updateJournalDetail.bind(this);
  }

  componentDidMount() {
    this.fetchJournalDetail();
  }

  setPostReady(isPostReady) {
    this.setState({ isPostReady })
  }

  updateJournalDetail(postObj) {
    this.setState({ postObj })
    if (!this.state.isPostReady) return;
    axios.post(`/api/journal/update/${postObj._id}`, postObj)
      .then(response => {
        let alertInfo = this.state.alertInfo;
        alertInfo.isVisible = true;
        if(response.status !== 200) this.state.alertInfo.type = 'error';
        this.setState({  alertInfo, loading: false });
      }).catch(error => {
        this.setState({ loading: false });
      });
  }

  fetchJournalDetail() {
    const urlVal = this.props.journalVal.id;
    console.log("GetJoural", this.props);
    this.setState(() => {
      axios
        .get('/api/journals/' + urlVal)
        .then(response => {
          var journalDetail = response.data;
          this.setState({ journalDetail, loading: false });
        })
        .catch(error => {
          this.setState({ loading: false });
        });
    });
  }

  render() {
    return (
      <Layout title={`${this.state.journalDetail.title || 'Journal'} - Karthik`}>
        <style global jsx> {`
          .knav a:nth-child(3) {
            border: solid #5F91F5;
            border-width: 0 0 3px;
            color: #5F91F5;
          }
        `}
        </style>
        <div className='body-content'>
          <section className='w-100 ph2 ph3-m ph4-l'>
            <div className='cf pa2'>
              <JournalPost detail={this.state.journalDetail}></JournalPost>
              <UILoader loading={this.state.loading} />
            </div>
          </section>


          <section className="admin-section">
            <div className="w-100 tc ft-head">
              <a className="ft-head tc pointer ttu tracked fw7 f6 grow no-underline ph4 pv3 br3 mv1 dib  ba b--blue blue">
                Edit Content
              </a>
            </div>
            <span className="db ph4">
              { this.state.alertInfo.isVisible
                  ? <DisplayAlert type={this.state.alertInfo.type} />
                  : ''
              }
            </span>
            <JournalForm setPostReady={this.setPostReady}
              savePost={this.updateJournalDetail}
              newPost={this.state.journalDetail}
              editMode={true} />
          </section>

        </div>
      </Layout>
    );
  }
}

export default JDetail;
