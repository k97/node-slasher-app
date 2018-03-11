import React from "react";
import Link from "next/link";
import { formateDate } from "../../handlers/helpers";

class JournalCard extends React.Component {
  render() {
    const jModal = this.props.details;
    const dateVal = formateDate(jModal.displayDate);
    return (
      <Link href={"/journalDetail?id=" + jModal.customUrlSlug} as={"/journal/" + jModal.customUrlSlug}>
        <div className="ka-journal-list-item bg-white br2 ph3 pt3 pb2 ba b--black-10">
          <article className="center">
            <h1 className="fw6 f4 mt1 mb0 black-70">
              {jModal.title}
            </h1>
            <p className="lh-copy center f5 black-60 mt2 pb2">
              {jModal.blurb}
            </p>

            <div className="cf bt b--black-10">
              <span className="fl w-50 db f7 fw5 ttu tracked black-50 tl pt2">
                <i className="f5 v-mid ion-ios-calendar-outline" />&nbsp;{dateVal}
              </span>
              <a href={`/journal/${jModal.customUrlSlug}`}>
                <span className="fl w-50 pt2 tr db f7 fw5 ttu tracked black-50 tl hover-blue pointer">
                  READ MORE
                  <i className="f3 lh-solid v-mid ion-ios-arrow-thin-right dib ml2" />
                </span>
              </a>
            </div>
          </article>
        </div>
      </Link>
    );
  }
}

export default JournalCard;
