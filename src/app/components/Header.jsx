import './Header.less'

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { header } = this.props

    return (
      <div className="header-box">
        <h1>{ header }</h1>
        <p>Session</p>
      </div>
    )
  }
}
