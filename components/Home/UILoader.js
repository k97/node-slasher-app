import React, { Component } from 'react';

class UILoader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`ka-loader ${this.props.loading ? 'db' : 'dn'}`}>
        <i className="ion-load-c blue"></i>
      </div>
    );
  }
}

export default UILoader;
