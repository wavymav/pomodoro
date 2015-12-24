import { INCREMENT_SESSION, INCREMENT_BREAK, DECREMENT_SESSION, DECREMENT_BREAK  } from '../constants';

const initialState = {
  sessionLength: 25,
  breakLength: 5,
  timeCountDown: null,
  percentVal: 0,
  session: true,
  totalTime: null,
  disabled: false
}

export const sessionLength = (state = 25, action) => {
  switch (action.type) {
    case INCREMENT_SESSION:
      return state + 1
    case DECREMENT_SESSION:
      return  state - 1
    default:
      return state
  }
}

export const breakLength = (state = 5, action) => {
  switch (action.type) {
    case INCREMENT_BREAK:
      return state + 1
    case DECREMENT_BREAK:
      return state - 1
    default:
      return state
  }
}
