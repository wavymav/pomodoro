import './App.less'

import React, { Component } from 'react';
import Header from './Header';
import Timer from './Timer';
import Controls from './Controls';
import SessionControls from './SessionControls';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Timer />
        <Controls />
        <SessionControls />
      </div>
    );
  }
}
