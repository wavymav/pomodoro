import {
  INCREMENT_SESSION,
  INCREMENT_BREAK,
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER,
  DECREMENT_SESSION,
  DECREMENT_BREAK  } from '../constants';

const initialState = {
  sessionLength: 25,
  breakLength: 5,
  time: 1500,
  totalTime: 1500,
  percent: 0,
  active: false,
  control: false,
  session: true
}

export const pomodoro = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_SESSION:
      if (state.sessionLength > 59) { return state }
      return {
        ...state,
        sessionLength: state.sessionLength + 1,
        time: (state.sessionLength * 60) + 60,
        totalTime: (state.sessionLength * 60) + 60
      }
    case DECREMENT_SESSION:
      if (state.sessionLength < 1) { return state }
      return {
        ...state,
        sessionLength: state.sessionLength - 1,
        time: (state.sessionLength * 60) - 60,
        totalTime: (state.sessionLength * 60) - 60
      }
    case INCREMENT_BREAK:
      if (state.breakLength > 29) { return state }
      return {
        ...state,
        breakLength: state.breakLength + 1
      }
    case DECREMENT_BREAK:
      if (state.breakLength < 1) { return state }
      return {
        ...state,
        breakLength: state.breakLength - 1
      }
    case START_TIMER:
      if (state.time === 0) {
        if (state.session) {
          return {
            ...state,
            session: !state.session,
            time: state.breakLength * 60,
            percent: 0,
            totalTime: state.breakLength * 60
          }
        } else {
          return {
            ...state,
            session: !state.session,
            time: state.sessionLength * 60,
            percent: 0,
            totalTime: state.sessionLength * 60
          }
        }
      }
      return {
        ...state,
        time: state.time - 1,
        percent: Math.abs(Math.round(((state.time - 1)/ state.totalTime) * 100 - 100)),
        active: true,
        control: true
      }

    case STOP_TIMER:
      return {
        ...state,
        active: false
      }
    case RESET_TIMER:
      return {
        ...state,
        sessionLength: state.sessionLength,
        time: state.sessionLength * 60,
        active: false,
        control: false
      }
    default:
      return state
  }
}
