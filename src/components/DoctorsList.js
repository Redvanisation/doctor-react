import React, { Component } from 'react';
import Doctor from './Doctor';

class DoctorsList extends Component {
  render() {
    return (
      <div className="container">
        <Doctor />
        <Doctor />
        <Doctor />
        <Doctor />
        <Doctor />
        <Doctor />
      </div>
    );
  }
}

export default DoctorsList;
