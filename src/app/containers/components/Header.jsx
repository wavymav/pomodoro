import './Header.less'

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const {
      header,
      sessionHead
    } = this.props
    const session = (sessionHead ? 'Session' : 'Break')

    return (
      <div className="header-box">
        <h1>{ header }</h1>
        <p>{ session }</p>
      </div>
    )
  }
}

Header.propTypes = {
  header: React.PropTypes.string.isRequired,
  sessionHead: React.PropTypes.bool.isRequired
}
