import React from "react";
import Link from "next/link";

class Journal extends React.Component {
  constructor() {
    super();
    this.scaffoldCard = this.scaffoldCard.bind(this);
  }

  scaffoldCard(jModal, key) {
    return (
      <article className="center bg-white br2 ph3 pv3 mt0 border-box">
        <div className="">
          <h1 className="f4 mt0 mb2 fw6">{jModal.name}</h1>
          <span className="db f7 fw5 ttu tracked black-60">Design</span>
        </div>
        <p className="lh-copy measure center f6 black-70 mt2">
          {jModal.post_summary}
        </p>
      </article>
    );
  }

  render() {
    const journalVal = this.props.details;
    return (
      <div className="fl w-100-ns w-50-m w-33-l w-25-ns ph3 pv2 shadow-hover">
        {this.scaffoldCard(journalVal)}
      </div>
    );
  }
}

export default Journal;
