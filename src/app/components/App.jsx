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
      percentVal: 0,
      session: true,
      totalTime: null
    }
  }

  componentWillMount() {
    console.log('Component Mounted');
    let { sessionLength } = this.state;
    let initialTime = sessionLength * 60
    this.setState({
      timeCountDown: initialTime,
      totalTime: initialTime
    })
  }

  setSession() {
    let { session, sessionLength, breakLength } = this.state;
    // let timerVal = sessionLength * 60
    // let totalTime = timeCountDown
    this.setState({
      session: !session
    })
    console.log(this.state.session);
    if (this.state.session) {
      this.setState({
        timeCountDown: sessionLength * 60,
        percentVal: 0,
        totalTime: sessionLength * 60
      })
    } else {
      this.setState({
        timeCountDown: breakLength * 60,
        percentVal: 0,
        totalTime: breakLength * 60
      })
    }
  }

  startTimer = () => {
    console.log('Start was clicked!');
    this.setState({ disabled: true })

    this.timerInterval = setInterval(() => {
      let { timeCountDown, totalTime, percentVal } = this.state;
      let timer = timeCountDown
      let total = totalTime
      this.setState({
        timeCountDown: timer -= 1,
        percentVal: Math.abs(Math.round(((timer)/ total) * 100 - 100))
      })
      if ( timeCountDown === 0) {
        this.setSession()
      }
      console.log(percentVal);
      console.log(timeCountDown);
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
      totalTime: sessionLength * 60,
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
      totalTime: sessionLength * 60,
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
      breakLength,
      session
    } = this.state

    return (
      <div className="container">
        <Header
          header="Pomodoro Timer"
          sessionHead={ session } />
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
