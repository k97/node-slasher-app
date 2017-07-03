import React, { Component } from 'react';

class DisplayAlert extends React.Component {

  constructor(props){
    super(props);
  }

  render () {
    var alertType = this.props.type.toLowerCase();
    if (!this.props.message) {
      var msgVal = (alertType == 'success') ? 'Success' : 'Error';
    }
    return (
      <div className={`v-mid black-80 flex items-center justify-center pa2 ${alertType == 'success' ? 'bg-light-red' : 'bg-light-green'}`}>
        <i className={`f4 mr3  ${alertType == 'success' ? 'ion-ios-close-outline' : 'ion-ios-checkmark-outline'}`}></i>
        <span className="lh-copy v-mid f5">{this.props.message || msgVal}</span>
      </div>
    );
  }
}

export default DisplayAlert;
