import React, { Component } from 'react';

class DisplayAlert extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var alertType = this.props.type.toLowerCase();
    if (!this.props.msg) {
      var msgVal = (alertType == 'success') ? 'Success' : 'Error';
    }
    return (
      <div>
        <section className={`cf br1 ba b--black-20 black-60 ${alertType == 'success' ? 'bg-light-green' : 'bg-light-red'}`}>
          <div className="fl w-90 pa2 mt1">
            <i className={`ml2 mr3 f3 v-mid ${alertType == 'success' ? 'ion-ios-checkmark-outline' : 'ion-android-warning'}`}></i>
            <span className="lh-copy ">{this.props.msg || msgVal}</span>
          </div>
          {/*<div className="fl w-10">
            <span className="db tc f3 mt2 pointer black-70 v-mid pa1">&times;</span>
          </div>*/}
        </section>
      </div>
    );
  }
}

export default DisplayAlert;
