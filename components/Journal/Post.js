import React from 'react';
import ReactMarkdown from 'react-markdown';

import { formateDate } from '../../handlers/helpers';

class JournalPost extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
  }


  render() {
    const journal = this.props.detail;
    const dateVal = formateDate(journal.displayDate);
    const summary = journal.summary ? journal.summary : '';
    const content = journal.content ? journal.content : '';
    return(
      <section className="">

        <header className="center pt3 pb2 tc">
          <h1 className="lh-title fw8 mt1 mb3 black-90">
            {journal.title}
          </h1>
          <time className="f6 f6-l db fw4 black-50">{dateVal}</time>
        </header>

        <div className="ph3 ph4-m ph5-l black-80">
          <p className="f4 mb1 center lh-copy i black-50 measure-wide">
            {journal.summary}
          </p>
        </div>
        <article className="markdown-body">
          <div className="journal-wrapper measure-wide fw4 measure db center f4 lh-copy black-60 ">
            <ReactMarkdown source={content} />
          </div>
        </article>
      </section>
    );
  }

}

export default JournalPost;
