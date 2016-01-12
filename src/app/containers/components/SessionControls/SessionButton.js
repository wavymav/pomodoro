import React from 'react';

export const SessionButton = ({ increment, sessionType, isDisabled }) => {
  const buttonStyle = (increment ?
    "session-controller__btn--increament" :
    "session-controller__btn--decrement")
  const buttonValue = (increment ? "+" : "-")
  return (
    <button
      className={ buttonStyle }
      onClick={ sessionType }
      disabled={ isDisabled } >
      { buttonValue }
    </button>
  )
}
