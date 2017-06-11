import React from "react";
import Link from "next/link";
// import DOMPurify from 'dompurify';

//DOMPurify.sanitize(cModel.caption)

class WorkCard extends React.Component {
  render() {
    const cModel = this.props.details;
    return (
      <section className="fl w-100 w-50-m w-25-l pa3 ">
              <Link
          href={"/workDetail?id=" + cModel.url}
          as={"/work/" + cModel.url}
        >
        <div className="bg-white br2 ba b--black-10 pointer shadow-hover">
          <div className="pv2 ph3 ">
            <h1 className="f6 ttu tracked">{cModel.title}</h1>
          </div>
          <img src={cModel.poster} className="w-100 db" alt={cModel.title} />
          <div className="pa3 ma0">
            <p className="db black-70 ma0 pa0" dangerouslySetInnerHTML={{__html: cModel.blurb}}></p>
            { cModel.caption
              ? (<small className="db gray pa0" dangerouslySetInnerHTML={{__html: cModel.caption}}></small>)
              : ''
            }
          </div>
        </div>
        </Link>
      </section>
    );
  }
}

export default WorkCard;
