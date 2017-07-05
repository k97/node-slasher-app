import React from "react";
import axios from "axios";

import Layout from "../components/Layout/index";
import JournalFilter from "../components/Journal/Filter";
import JournalCard from "../components/Journal/Card";
import UILoader from '../components/Home/UILoader';

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
      page: 1,
      totalPages: null,
      type: {},
      loading: true
    };
    this.fetchJournals = this.fetchJournals.bind(this);
    this.renderNoRecordsMsg = this.renderNoRecordsMsg.bind(this);
    this.renderJournalCard = this.renderJournalCard.bind(this);
    this.loadMoreBtn = this.loadMoreBtn.bind(this);
    this.filterPosts = this.filterPosts.bind(this);
  }


  componentDidMount() {
    this.fetchJournals();
  }

  handlePagination (pageVal){
    this.fetchJournals(pageVal);
  }


  /**
   * Method to reset the page and pass in the newly selected filter value
   * @param {*Object} val
   */
  filterPosts (val) {
    val = Object.keys(val.type).length ? val : {};
    this.setState({journalList: []});
    this.fetchJournals(1, val);
  }

  /**
   * Method to load the button template for the list
   */
  loadMoreBtn() {
    return (
      <div className="flex items-center justify-center pa4">
        <a onClick={this.handlePagination.bind(this, this.state.page +1)} className="f5 no-underline black-80 bg-animate hover-bg-black hover-white inline-flex items-center ph4 pv2 shadow-hover ba br2">
          <span className="pr1" title={`Page: ${this.state.page} - Total : ${this.state.count}`}>Load more</span>
        </a>
      </div>
    );
  }

  /**
   * Method to fetch list values from the DB
   * @param {*Number} pageVal
   * @param {*Object} selectedFilter
   */
  fetchJournals(pageVal, selectedFilter) {
    const pageNo = pageVal ? pageVal : this.state.page;
    const filterVal = selectedFilter ? selectedFilter : this.state.type;

    this.setState(() => {
      axios
        .post("/api/journals", {
            limit: this.state.limit,
            page: pageVal,
            type: filterVal
        })
        .then(response => {
          const jObj = response.data;
          let list = this.state.journalList.concat(jObj.journals);
          this.setState({
            journalList: list,
            count: jObj.count,
            loading: false,
            page: pageNo,
            type: filterVal,
            totalPages: jObj.pages
          });
        })
        .catch(error => {
          this.setState({ loading: false });
        });
    });
  }

  renderNoRecordsMsg(){
    return (
        !this.state.loading
          ? <div className="tc ma5 center pv6"><p className="b f4 pv6  black-80 fw6"><i className="db ion-sad-outline f2 black-70"></i>Sorry, no records to display.</p></div>
          : ''
    );
  }

  renderJournalCard(jList) {
    return (
      Object.keys(jList).map(key => (
        <JournalCard details={jList[key]} key={key} />
      ))
    );
  }

  render() {
    let { journalList, total } = this.state;
    return (
      <Layout title={"Journal - Karthik"}>
        <style global jsx>{`
          .knav a:nth-child(3) {
            border: solid #5F91F5;
            border-width: 0 0 3px;
            color: #5F91F5;
          }
          `}
        </style>
        <div className="body-content">
          <JournalFilter filterPosts={this.filterPosts} />
          <section className="w-100 ph0-ns pa3-m pa3-l">
            <div className="ka-list pa0-ns pa2">
              {(journalList.length > 0)
                ? this.renderJournalCard(journalList)
                : this.renderNoRecordsMsg()
              }
            </div>
            <UILoader loading={this.state.loading} />
          </section>
          { ((this.state.page < this.state.totalPages) && (journalList.length > 0)) ? this.loadMoreBtn() : '' }
        </div>
      </Layout>
    );
  }
}

export default JList;
