import './Controls.less'

import React, { Component } from 'react';


export default class Controls extends Component {
  render() {
    const {
      startClick,
      stopClick,
      resetClick
    } = this.props
    return (
      <div className="ctrl-container">
        <a className="btn stop" onClick={ stopClick }>Stop</a>
        <a className="btn start" onClick={ startClick }>Start</a>
        <a className="btn reset" onClick={ resetClick }>Reset</a>
      </div>
    );
  }
}
