import React from 'react';
import axios from 'axios';

import Layout from '../components/Layout/index';
import JournalPost from '../components/Journal/Post';

class JDetail extends React.Component {

  static getInitialProps({ query: journalVal }) {
    return { journalVal };
  }

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      journalDetail: {}
    };
    this.fetchJournalDetail = this.fetchJournalDetail.bind(this);
  }

  componentDidMount() {
    this.fetchJournalDetail();
  }

  fetchJournalDetail() {
    const urlVal = this.props.journalVal.id;
    console.log("GetJoural", this.props);
    this.setState(() => {
      axios
        .get('/api/journals/'+ urlVal)
        .then(response => {
          const jObj = response.data;
          this.setState({
            journalDetail: jObj
          });

        })
        .catch(error => {
          this.setState({ loading: false });
        });
    });
  }

  render() {
    const { journalList, total } = this.state;
    return (
      <Layout title={`${this.state.journalDetail.title || 'Journal'} - Karthik`}>
        <div className='body-content'>
          <section className='w-100 ph2 ph3-m ph4-l'>
            <div className='cf pa2'>
              <JournalPost detail={this.state.journalDetail}></JournalPost>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default JDetail;

//     <JournalFilter />
// <JournalList />
// <JournalPost></JournalPost>
