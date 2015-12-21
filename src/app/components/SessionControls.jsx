import './SessionControls.less'

import React, { Component } from 'react';


export default class SessionControls extends Component {
  render() {
    return (
      <div className="session-container">
        <div className="ctrl">
          <p className="len-head">Break Length</p>
          <p className="len-val">
            <a className="btn-dec">-</a>
              <span>5</span>
            <a className="btn-inc">+</a>
          </p>
        </div>
        <div className="ctrl">
          <p className="len-head">Session Length</p>
          <p className="len-val">
            <a className="btn-dec">-</a>
              <span>25</span>
            <a className="btn-inc">+</a>
          </p>
        </div>
      </div>
    );
  }
}
