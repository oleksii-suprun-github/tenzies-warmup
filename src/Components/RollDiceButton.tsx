import React, { MouseEventHandler, PropsWithChildren } from 'react';

const RollDiceButton = ({
  onClick,
  children,
  disabled,
}: PropsWithChildren<{
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}>) => (
  <button
    data-testid="roll-dice-button"
    data-tip="Please select all equal dice before rolling."
    className={`btn btn-primary ${disabled ? 'tooltip tooltip-open' : ''} tooltip-top mx-auto my-[25px] mt-[50px] w-fit min-w-32 bg-main-button text-2xl text-main-die`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default RollDiceButton;
