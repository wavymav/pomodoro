import './Header.less'

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const {
      sessionType
    } = this.props
    const session = (sessionType ? 'Session' : 'Break')

    return (
      <div className="header-box">
        <h1>Pomodoro Timer</h1>
        <p>{ session }</p>
      </div>
    )
  }
}

Header.propTypes = {
  sessionType: React.PropTypes.bool.isRequired
}
