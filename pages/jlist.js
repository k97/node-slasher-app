import React from "react";
import Link from "next/link";
import axios from "axios";

import Layout from "../components/Layout/index";
import JournalFilter from "../components/Journal/Filter";
import JournalCard from "../components/Journal/Card";

class JList extends React.Component {

  static getInitialProps({ query: { jid } }) {
    return { jid };
  }

  constructor(props) {
    super(props);
    this.state = {
      jid: null,
      journalList: [],
      limit: 6,
      count: 0,
      page: 1
    };
    this.fetchJournals = this.fetchJournals.bind(this);
    this.loadMoreBtn = this.loadMoreBtn.bind(this);
  }

  componentDidMount() {
    this.fetchJournals();
  }

  handlePagination(currentPage) {
    // const newCount = this.state.count + 1;
    this.setState({
      page : currentPage + 1
    });
    this.fetchJournals();
  }


  loadMoreBtn() {
    return (
      <div className="flex items-center justify-center pa4">
        <a onClick={this.handlePagination.bind(this, this.state.page)} className="f5 no-underline black-80 bg-animate hover-bg-black hover-white inline-flex items-center ph4 pv2 shadow-hover ba br2">
          <span className="pr1">Load more Page: {this.state.page} - Total : {this.state.count}</span>
        </a>
      </div>
    );
  }

  fetchJournals() {
    this.setState(() => {
      axios
        .get("/api/journals", {
          params: {
            limit: this.state.limit,
            page: this.state.page
          }
        })
        .then(response => {
          const jObj = response.data;
          this.setState({
            journalList: jObj.journals,
            pages: jObj.pages,
            count: jObj.count,
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
          <JournalFilter />
          <section className="w-100 ph0-ns ph3-m ph4-l">
            <div className="cf pa0-ns pa2">
              {Object.keys(journalList).map(key => (
                <JournalCard details={journalList[key]} key={key} />
              ))}
            </div>
          </section>
          { this.loadMoreBtn() }
        </div>
      </Layout>
    );
  }
}

export default JList;

//     <JournalFilter />
// <JournalList />
// <JournalPost></JournalPost>
