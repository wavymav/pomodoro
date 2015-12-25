import {
  INCREMENT_SESSION,
  INCREMENT_BREAK,
  DECREMENT_SESSION,
  DECREMENT_BREAK,
  START_TIMER,
  RESET_TIMER,
  STOP_TIMER
} from '../constants';

export const incrementSession = () => {
  return {
    type: INCREMENT_SESSION
  }
}

export const decrementSession = () => {
  return {
    type: DECREMENT_SESSION
  }
}

export const startSession = () => {
  return {
    type: START_TIMER
  }
}

export const resetSession = () => {
  return {
    type: RESET_TIMER
  }
}

export const stopSession = () => {
  return {
    type: STOP_TIMER
  }
}

export const incrementBreak = () => {
  return {
    type: INCREMENT_BREAK
  }
}

export const decrementBreak = () => {
  return {
    type: DECREMENT_BREAK
  }
}
