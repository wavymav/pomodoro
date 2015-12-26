// import './App.less'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  SessionControls,
  TimerControls,
  Timer,
  Header
} from './components'
import {
  incrementSession,
  decrementSession,
  startSession,
  resetSession,
  stopSession,
  incrementBreak,
  decrementBreak
} from '../actions'

export default class App extends Component {
  render() {
    const {
      pomodoro
    } = this.props

    return (
      <div className="container">
        <Header
          sessionType={ pomodoro.session }/>
        <Timer
          time={ pomodoro.time }
          percent={ pomodoro.percent }
          />
        <TimerControls
          startClick={ this.startTimer }
          stopClick={ this.stopTimer }
          resetClick={ this.resetTimer }
          disableStartBtn={ pomodoro.active } />
        <SessionControls
          increamentSession={ this.incrementSessionLength }
          decrementSession={ this.decrementSessionLength }
          increamentBreak={ this.incrementBreakLength }
          decrementBreak={ this.decrementBreakLength }
          sessionTime={ pomodoro.sessionLength }
          breakTime={ pomodoro.breakLength }
          disableBtn={ pomodoro.control } />
      </div>
    )
  }

  incrementSessionLength = () => {
    this.props.dispatch(incrementSession())
  }

  decrementSessionLength = () => {
    this.props.dispatch(decrementSession())
  }

  incrementBreakLength = () => {
    this.props.dispatch(incrementBreak())
  }

  decrementBreakLength = () => {
    this.props.dispatch(decrementBreak())
  }

  startTimer = () => {
    this.interval = setInterval(() => {
      this.props.dispatch(startSession())
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.interval)
    this.props.dispatch(stopSession())
  }

  resetTimer = () => {
    clearInterval(this.interval)
    this.props.dispatch(resetSession())
  }

}

const mapStateToProps = (state) => ({
  pomodoro: state.pomodoro
})

export default connect(mapStateToProps)(App)
