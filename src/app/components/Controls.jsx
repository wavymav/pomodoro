import './Controls.less'

import React, { Component } from 'react';


export default class Controls extends Component {
  render() {
    return (
      <div className="ctrl-container">
        <a className="btn stop">Stop</a>
        <a className="btn start">Start</a>
        <a className="btn reset">Reset</a>
      </div>
    );
  }
}
