import React from "react";
import Link from "next/link";
import axios from "axios";

import Layout from "../components/Layout/index";
import JournalFilter from "../components/Journal/Filter";
import Journal from "../components/Journal/JournalItem";
import JournalPost from "../components/Journal/Post";

class JournalList extends React.Component {

  static getInitialProps({ query: { jid } }) {
    return { jid };
  }

  constructor(props) {
    super(props);
    this.state = {
      jid: null,
      journalList: [],
      limit: 6,
      total: 0,
      offset: 0
    };
    this.fetchJournals = this.fetchJournals.bind(this);
    this.getJournalListData = this.getJournalListData.bind(this);
    this.loadJournal = this.loadJournal.bind(this);
  }

  componentDidMount() {
    this.fetchJournals();
  }

  fetchJournals() {
    const jid = this.props.jid;
    if (jid) {
      console.log(jid);
      this.loadJournal();
      //
    } else {
      this.getJournalListData();
    }
  }

  getJournalListData() {
    this.setState(() => {
      axios
        .get("http://localhost:9697/journals", {
          params: {
            limit: this.state.limit,
            offset: this.state.offset
          }
        })
        .then(response => {
          const jObj = response.data;
          this.setState({
            journalList: jObj.journals,
            limit: jObj.limit,
            offset: jObj.offset,
            total: jObj.total_count,
            loading: false
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
      <Layout title={"Journal - Karthik"}>
        <div className="body-content">
          <section className="w-100 ph2 ph3-m ph4-l">
            <div className="cf pa2">
              {Object.keys(journalList).map(key => (
                <Journal key={key} details={journalList[key]} />
              ))}
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default JournalList;

//     <JournalFilter />
// <JournalList />
// <JournalPost></JournalPost>
