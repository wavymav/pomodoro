import './Timer.less'

import React, { Component } from 'react';

export default class Timer extends Component {
  render() {
    return (
      <div className="timer-box">
        <div className="c100 p12 normal">
          <span>25:00</span>
          <div className="slice">
            <div className="bar"></div>
            <div className="fill"></div>
          </div>
        </div>
      </div>
    );
  }
}
