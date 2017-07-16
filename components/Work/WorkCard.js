import React from "react";
import Link from "next/link";

class WorkCard extends React.Component {
  templateLock(isKey) {
    return (
      <span className="dib f3 fr right-0 black-80">
        <i className="ion-ios-locked-outline" />
      </span>
    );
  }

  render() {
    const cModel = this.props.details;
    const isWip = () => {
      return (
        <span className="f7 fw6 absolute br1 ba ph2 pv1 tracked black-50 b--black-40 z-4 mt3 ml3">
          Draft
        </span>
      );
    };

    return (
      <section className="pt1 bg-white br2 ba b--black-10">
        <div className="pb1 ph3">
          <h1 className="dib f6 ttu tracked black-70">
            {cModel.title}
          </h1>
          {cModel.locked ? this.templateLock() : ""}
        </div>
        {cModel.isProjectWip ? isWip() : ""}
        <img src={cModel.poster} className="w-100 db" alt={cModel.title} />
        <div className="pa3 ma0 ft-serif">
          <p
            className="db black-70 ma0 pa0"
            dangerouslySetInnerHTML={{ __html: cModel.blurb }}
          />
          {cModel.caption
            ? <small
                className="db gray pa0 mt2"
                dangerouslySetInnerHTML={{ __html: cModel.caption }}
              />
            : ""}
        </div>
      </section>
    );
  }
}

export default WorkCard;
