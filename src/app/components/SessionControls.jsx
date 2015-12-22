import './SessionControls.less'

import React, { Component } from 'react';


export default class SessionControls extends Component {
  render() {
    const {
      increamentSession,
      decrementSession,
      increamentBreak,
      decrementBreak,
      sessionTime,
      breakTime,
      disableBtns
    } = this.props

    return (
      <div className="session-container">
        <div className="ctrl">
          <p className="len-head">Break Length</p>
          <p className="len-val">
            <button className="btn-dec"
              onClick={ decrementBreak }
              disabled={ disableBtns }>
              -
            </button>
              <span>{ breakTime }</span>
            <button className="btn-inc"
              onClick={ increamentBreak }
              disabled={ disableBtns }>
              +
            </button>
          </p>
        </div>
        <div className="ctrl">
          <p className="len-head">Session Length</p>
          <p className="len-val">
            <button className="btn-dec"
              onClick={ decrementSession }
              disabled={ disableBtns }>
              -
            </button>
              <span>{ sessionTime }</span>
            <button className="btn-inc"
              onClick={ increamentSession }
              disabled={ disableBtns }>
              +
            </button>
          </p>
        </div>
      </div>
    );
  }
}
