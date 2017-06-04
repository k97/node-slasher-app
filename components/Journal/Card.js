import React from "react";
import Link from "next/link";

class JournalCard extends React.Component {

  render() {
    const jModal = this.props.details;
    return (
      <div className="fl w-100-ns w-50-m w-33-l w-25-ns ph3 pv2 ">
        <Link href={'/jdetail?id='+ jModal.customUrlSlug}  as={'/journal/'+jModal.customUrlSlug}>
        <article className="center bg-white br2 ph3 pv3 mt0 border-box shadow-hover">
          <div className="">
            <h1 className="f4 mt0 mb2 fw6">{jModal.title}</h1>
            <span className="db f7 fw5 ttu tracked black-60">{jModal.tags[0]}</span>
          </div>
          <p className="lh-copy measure center f6 black-70 mt2">
            {jModal.blurb}
          </p>
        </article>
        </Link>
      </div>
    );
  }
}

export default JournalCard;
