import './App.less'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SessionControls }  from './components'
import { incrementSession, decrementSession, incrementBreak, decrementBreak } from '../actions'

export default class App extends Component {
  render() {
    const {
      breakLength,
      sessionLength,
      dispatch
    } = this.props

    return (
      <div className="container">
        <SessionControls
          increamentSession={ () => dispatch(incrementSession()) }
          decrementSession={ () => dispatch(decrementSession()) }
          increamentBreak={ () => dispatch(incrementBreak()) }
          decrementBreak={ () => dispatch(decrementBreak()) }
          sessionTime={ sessionLength }
          breakTime={ breakLength } />
      </div>
    )
  }
}

export default connect((state) => ({
  sessionLength: state.sessionLength,
  breakLength: state.breakLength
}))(App)
