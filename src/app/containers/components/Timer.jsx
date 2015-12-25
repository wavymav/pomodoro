import './Timer.less'

import React, { Component } from 'react';

export default class Timer extends Component {
  secondsToHMS(secs) {
    secs = Number(secs);
    const h = Math.floor(secs / 3600);
    const m = Math.floor(secs % 3600 / 60);
    const s = Math.floor(secs % 3600 % 60);
    return (
      (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s
    );
  }

  render() {
    const {
      time,
      percent
    } = this.props
    const circleFill = `c100 p${ percent } normal`
    const timer = this.secondsToHMS(time)

    return (
      <div className="timer-box">
        <div className={ circleFill }>
          <span>{ timer }</span>
          <div className="slice">
            <div className="bar"></div>
            <div className="fill"></div>
          </div>
        </div>
      </div>
    );
  }
}

// Timer.propTypes = {
//   time: React.PropTypes.number.isRequired,
//   percent: React.PropTypes.number.isRequired
// }
