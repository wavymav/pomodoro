import { INCREMENT_SESSION, INCREMENT_BREAK, DECREMENT_SESSION, DECREMENT_BREAK  } from '../constants';

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
