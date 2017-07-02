import React from 'react';

class ProjectTitle extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={`ft-head ${this.props.bgColor}`}>
        <div className="mw9 center pa4 pt5-ns ph7-l pt6 pv5 tc">
          <h3 className="f2 f1-m f-headline-l measure-wide lh-title mt3 mb2">
            <span className="bg-black-80 lh-copy white pv1 ph3 tracked-tight">
              {this.props.heading}
            </span>
          </h3>
          <time className="f4 ttu tracked black-80"><small>{this.props.date}</small></time>
        </div>
      </header>
    );
  }
}

export default ProjectTitle
