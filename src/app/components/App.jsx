import './App.less'

import React, { Component } from 'react';
import Header from './Header';
import Timer from './Timer';
import Controls from './Controls';
import SessionControls from './SessionControls';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      timeCountDown: 25 * 60,
      percentVal: 0,
      disabled: false
    }
  }

  startTimer = () => {
    console.log('Start was clicked!');
    let { timeCountDown } = this.state;
    this.setState({
      disabled: true
    })

    this.timerInterval = setInterval(() => {
      this.setState({
        timeCountDown: --timeCountDown,
        percentVal: Math.abs(Math.round(((timeCountDown)/ 1500) * 100 - 100))
      })
      console.log(this.state.percentVal);
    }, 1000)
  }

  stopTimer = () => {
    console.log('Stop was clicked!');
    clearInterval(this.timerInterval)
    this.setState({
      disabled: false
    })
  }

  resetTimer = () => {
    console.log('Reset was clicked!');
    this.setState({
      timeCountDown: 25 * 60,
      percentVal: 0,
      disabled: false
    })
    clearInterval(this.timerInterval)
  }

  render() {
    const {
      timeCountDown,
      percentVal,
      disabled
    } = this.state

    return (
      <div className="container">
        <Header header="Pomodoro Timer" />
        <Timer
          time={ timeCountDown }
          percent={ percentVal } />
        <Controls
          startClick={ this.startTimer }
          stopClick={ this.stopTimer }
          resetClick={ this.resetTimer }
          disableStartBtn= { disabled } />
        <SessionControls />
      </div>
    );
  }
}
