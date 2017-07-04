import React from "react";
import Link from "next/link";
import { formateDate } from '../../handlers/helpers';

class JournalCard extends React.Component {
  render() {
    const jModal = this.props.details;
    const dateVal = formateDate(jModal.displayDate);
    return (
      <div className="ka-list-item bg-white br2 pa3 ba b--black-10">
        <Link
          href={"/journalDetail?id=" + jModal.customUrlSlug}
          as={"/journal/" + jModal.customUrlSlug}
        >
          <article className="center">
            <div className="cf mt1">
              <span className="fl w-50 db f7 fw6 ttu black-60 ft-head">
                <i className="ion-ios-calendar-outline f5 v-mid"></i>&nbsp; {dateVal}
              </span>
            </div>
            <h1 className="fw6 f4 mt1 mb0">{jModal.title}</h1>
            <p className="lh-copy center f5 black-60 mt2">{jModal.blurb}</p>
            {/*<span className="db f7 fw5 ttu tracked black-50 tl"><i className="f5 v-mid ion-ios-paper-outline"></i>&nbsp;{jModal.type}</span>*/}
          </article>
        </Link>
      </div>
    );
  }
}

export default JournalCard;
