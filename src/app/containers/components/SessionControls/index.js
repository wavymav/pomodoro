import './SessionControls.less'

import React from 'react';
import { SessionButton } from './SessionButton'

export const SessionControls = ({
  breakTime,
  sessionTime,
  increamentSession,
  decrementSession,
  increamentBreak,
  decrementBreak,
  disableBtn
}) => (
  <div className="session-controller-container">
    <div className="session-controller">
      <p className="session-controller__header">Break Length</p>
      <p className="session-controller__value">

        <SessionButton
          increment={ false }
          sessionType={ decrementBreak }
          isDisabled={ disableBtn } />

          <span>
            { breakTime }
          </span>

        <SessionButton
          increment={ true }
          sessionType={ increamentBreak }
          isDisabled={ disableBtn } />

      </p>
    </div>
    <div className="session-controller">
      <p className="session-controller__header">Session Length</p>
      <p className="session-controller__value">

        <SessionButton
          increment={ false }
          sessionType={ decrementSession }
          isDisabled={ disableBtn } />

          <span>
            { sessionTime }
          </span>

        <SessionButton
          increment={ true }
          sessionType={ increamentSession }
          isDisabled={ disableBtn } />

      </p>
    </div>
  </div>
)

SessionControls.propTypes = {
  increamentSession: React.PropTypes.func.isRequired,
  decrementSession: React.PropTypes.func.isRequired,
  increamentBreak: React.PropTypes.func.isRequired,
  decrementBreak: React.PropTypes.func.isRequired,
  sessionTime: React.PropTypes.number.isRequired,
  breakTime: React.PropTypes.number.isRequired
}
