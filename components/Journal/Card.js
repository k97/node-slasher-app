import React from "react";
import Link from "next/link";

class JournalCard extends React.Component {
  render() {
    const jModal = this.props.details;
    return (
      <div className="fl w-100-ns w-50-m w-33-l w-25-ns pa2">
        <Link
          href={"/journalDetail?id=" + jModal.customUrlSlug}
          as={"/journal/" + jModal.customUrlSlug}
        >
          <article className="center bg-white br2 pa3 ba b--black-10 shadow-hover">
            <span className="db f7 mv2 fw5 ttu tracked black-80">{jModal.type}</span>
            <h1 className="fw6 f4 mt1 mb0">{jModal.title}</h1>
            <p className="lh-copy measure center f6 black-70 mt2">{jModal.blurb}</p>
          </article>
        </Link>
      </div>
    );
  }
}

export default JournalCard;
