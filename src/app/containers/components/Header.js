import './Header.less'

import React from 'react';

export const Header = ({ sessionType }) => {
  const session = (sessionType ? 'Session' : 'Break')

  return (
    <div className="header-container">
      <h1>Pomodoro Timer</h1>
      <p>{ session }</p>
    </div>
  )
}

Header.propTypes = {
  sessionType: React.PropTypes.bool.isRequired
}
