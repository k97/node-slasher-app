import React from 'react';
import Link from 'next/link';


class JournalFilter extends React.Component {


  render() {
    return (
      <div>
        <section className="pv4 ph5 black-90 bg--journal">
          <div className="b f3 f2-ns black-70 lh-solid journal--header">Recordings</div>
          <p className="f6 db ttu lh-solid journal--subtitle">about design and TECH</p>
        </section>

        <div className="ph5 pv3 bt bb b--black-10 black-70 f5">
            <a className="link dib pr3 dim">All</a>
            <a className="link dib ph3 dim">Case Studies</a>
            <a className="link dib pl3 dim">Blog Posts</a>
        </div>
      </div>
    );
  }

}

export default JournalFilter;
