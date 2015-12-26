import './SessionControls.less'

import React, { Component } from 'react';

export default class SessionControls extends Component {
  render() {
    const {
      breakTime,
      sessionTime,
      increamentSession,
      decrementSession,
      increamentBreak,
      decrementBreak,
      disableBtn
    } = this.props

    return (
      <div className="session-container">
        <div className="ctrl">
          <p className="len-head">Break Length</p>
          <p className="len-val">
            <button
              className="btn-dec"
              onClick={ decrementBreak }
              disabled={ disableBtn } >
              -
            </button>
              <span>{ breakTime }</span>
            <button
              className="btn-inc"
              onClick={ increamentBreak }
              disabled={ disableBtn } >
              +
            </button>
          </p>
        </div>
        <div className="ctrl">
          <p className="len-head">Session Length</p>
          <p className="len-val">
            <button
              className="btn-dec"
              onClick={ decrementSession }
              disabled={ disableBtn } >
              -
            </button>
              <span>{ sessionTime }</span>
            <button
              className="btn-inc"
              onClick={ increamentSession }
              disabled={ disableBtn } >
              +
            </button>
          </p>
        </div>
      </div>
    )
  }
}

SessionControls.propTypes = {
  increamentSession: React.PropTypes.func.isRequired,
  decrementSession: React.PropTypes.func.isRequired,
  increamentBreak: React.PropTypes.func.isRequired,
  decrementBreak: React.PropTypes.func.isRequired,
  sessionTime: React.PropTypes.number.isRequired,
  breakTime: React.PropTypes.number.isRequired
}
