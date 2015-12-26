import './TimerControls.less'

import React, { Component } from 'react';

export default class TimerControls extends Component {
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

TimerControls.propTypes = {
  startClick: React.PropTypes.func.isRequired,
  stopClick: React.PropTypes.func.isRequired,
  resetClick: React.PropTypes.func.isRequired,
  disableStartBtn: React.PropTypes.bool.isRequired
}
