import React from 'react';
import { formateDate } from '../../handlers/helpers';
import ReactMarkdown from 'react-markdown';

class JournalPost extends React.Component {

  render() {
    const journal = this.props.detail;
    const dateVal = formateDate(journal.displayDate);
    const summary = journal.summary ? journal.summary : '';
    const content = journal.content ? journal.content : '';
    return(
      <article className="">

        <header className="center measure pt3 pb1 tc">
          <h1 className=" lh-title fw8 mt0 black-90">
            {journal.title}
          </h1>
          <time className="f6 f6-l db fw4 mb1 black-50">{dateVal}</time>
        </header>

        <div className="ph3 ph4-m ph5-l black-80 ft-serif">
          <p className="f4 mb4 center measure lh-copy i black-50">
            {journal.summary}
          </p>
        </div>
          <div className="fw4 measure db center f4 lh-copy black-60 ft-serif">
            <ReactMarkdown source={content} />
        </div>
      </article>
    );
  }

}

export default JournalPost;
