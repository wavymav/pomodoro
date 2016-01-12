import './App.less'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
      <div className="app-container">
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
    this.props.incrementSession()
  }

  decrementSessionLength = () => {
    this.props.decrementSession()
  }

  incrementBreakLength = () => {
    this.props.incrementBreak()
  }

  decrementBreakLength = () => {
    this.props.decrementBreak()
  }

  startTimer = () => {
    this.interval = setInterval(() => {
      this.props.startSession()
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.interval)
    this.props.stopSession()
  }

  resetTimer = () => {
    clearInterval(this.interval)
    this.props.resetSession()
  }

}

// const mapStateToProps = (state) => ({
//   pomodoro: state.pomodoro
// })
const mapStateToProps = ({ pomodoro }) => ({ pomodoro })

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    incrementSession,
    decrementSession,
    incrementBreak,
    decrementBreak,
    startSession,
    stopSession,
    resetSession
  }, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
