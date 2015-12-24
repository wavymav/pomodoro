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
      totalTime: null,
      disabled: false
    }
  }

  // componentWillMount() {
  //   console.log('Component Mounted');
  //   let { sessionLength } = this.state;
  //   let initialTime = sessionLength * 60
  //   this.setState({
  //     timeCountDown: initialTime,
  //     totalTime: initialTime
  //   })
  // }
  //
  // setSession() {
  //   let { session, sessionLength, breakLength } = this.state;
  //   // let timerVal = sessionLength * 60
  //   // let totalTime = timeCountDown
  //   this.setState({
  //     session: !session
  //   })
  //   console.log(this.state.session);
  //   if (this.state.session) {
  //     this.setState({
  //       timeCountDown: sessionLength * 60,
  //       percentVal: 0,
  //       totalTime: sessionLength * 60
  //     })
  //   } else {
  //     this.setState({
  //       timeCountDown: breakLength * 60,
  //       percentVal: 0,
  //       totalTime: breakLength * 60
  //     })
  //   }
  // }
  //
  // startTimer = () => {
  //   console.log('Start was clicked!');
  //   this.setState({ disabled: true })
  //
  //   this.timerInterval = setInterval(() => {
  //     let { timeCountDown, totalTime, percentVal } = this.state;
  //     let timer = timeCountDown
  //     let total = totalTime
  //     this.setState({
  //       timeCountDown: timer -= 1,
  //       percentVal: Math.abs(Math.round(((timer)/ total) * 100 - 100))
  //     })
  //     if ( timeCountDown === 0) {
  //       this.setSession()
  //     }
  //     console.log(percentVal);
  //     console.log(timeCountDown);
  //   }, 1000)
  //
  // }
  //
  // stopTimer = () => {
  //   console.log('Stop was clicked!');
  //   clearInterval(this.timerInterval)
  //   this.setState({ disabled: false })
  // }
  //
  // resetTimer = () => {
  //   console.log('Reset was clicked!');
  //   this.setState({
  //     timeCountDown: 25 * 60,
  //     percentVal: 0,
  //     disabled: false
  //   })
  //   clearInterval(this.timerInterval)
  // }

  increaseSession = () => {

  }

  decreaseSession = () => {

  }

  increaseBreak = () => {

  }

  decreaseBreak = () => {

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
