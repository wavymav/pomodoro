import './Timer.less'

import React from 'react';

const secondsToHMS = (secs) => {
  secs = Number(secs);
  const h = Math.floor(secs / 3600);
  const m = Math.floor(secs % 3600 / 60);
  const s = Math.floor(secs % 3600 % 60);
  return (
    (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s
  );
}

export const Timer = ({ time, percent }) => {
  const circleFill = `c100 p${ percent } normal`
  const timer = secondsToHMS(time)

  return (
    <div className="timer-container">
      <div className={ circleFill }>
        <span>{ timer }</span>
        <div className="slice">
          <div className="bar"></div>
          <div className="fill"></div>
        </div>
      </div>
    </div>
  )
}


Timer.propTypes = {
  time: React.PropTypes.number.isRequired,
  percent: React.PropTypes.number.isRequired
}
