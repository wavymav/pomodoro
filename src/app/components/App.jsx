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
      timeCountDown: null,
      percental: 0
    }
  }

  componentWillMount() {
    console.log('Component Mounted');
    let { sessionLength } = this.state;
    let initialTime = sessionLength * 60
    this.setState({ timeCountDown: initialTime })
  }

  startTimer = () => {
    console.log('Start was clicked!');
    let { sessionLength, timeCountDown } = this.state;
    let timerVal = sessionLength * 60
    let totalTime = timeCountDown
    this.setState({ disabled: true })

    this.timerInterval = setInterval(() => {
      this.setState({
        timeCountDown: --timerVal,
        percentVal: Math.abs(Math.round(((timerVal)/ totalTime) * 100 - 100))
      })
      console.log(this.state.percentVal);
    }, 1000)
  }

  stopTimer = () => {
    console.log('Stop was clicked!');
    clearInterval(this.timerInterval)
    this.setState({ disabled: false })
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

  increaseSession = () => {
    console.log('Session increased by 1 minute!');
    let { sessionLength } = this.state;
    sessionLength++
    this.setState({
      sessionLength: sessionLength,
      timeCountDown: sessionLength * 60,
      percentVal: 0
    })
  }

  decreaseSession = () => {
    console.log('Session decreased by 1 minute!');
    let { sessionLength } = this.state;
    sessionLength--
    this.setState({
      sessionLength: sessionLength,
      timeCountDown: sessionLength * 60,
      percentVal: 0
    })
  }

  increaseBreak = () => {
    console.log('Break increased by 1 minute!');
    let { breakLength } = this.state;
    breakLength++
    this.setState({ breakLength: breakLength })
  }

  decreaseBreak = () => {
    console.log('Break decreased by 1 minute!');
    let { breakLength } = this.state;
    breakLength--
    this.setState({ breakLength: breakLength })
  }

  render() {
    const {
      timeCountDown,
      percentVal,
      disabled,
      sessionLength,
      breakLength
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
          disableStartBtn={ disabled } />
        <SessionControls
          increamentSession={ this.increaseSession }
          decrementSession={ this.decreaseSession }
          increamentBreak={ this.increaseBreak }
          decrementBreak={ this.decreaseBreak }
          sessionTime={ sessionLength }
          breakTime={ breakLength }
          disableBtns={ disabled } />
      </div>
    );
  }
}
