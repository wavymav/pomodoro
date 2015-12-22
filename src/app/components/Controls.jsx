import './Controls.less'

import React, { Component } from 'react';


export default class Controls extends Component {
  render() {
    const {
      startClick,
      stopClick,
      resetClick,
      disableStartBtn
    } = this.props

    return (
      <div className="ctrl-container">
        <button
          className="btn stop"
          onClick={ stopClick }>
          Stop
        </button>
        <button
          className="btn start"
          onClick={ startClick }
          disabled={ disableStartBtn }>
          Start
        </button>
        <button
          className="btn reset"
          onClick={ resetClick }>
          Reset
        </button>
      </div>
    );
  }
}
