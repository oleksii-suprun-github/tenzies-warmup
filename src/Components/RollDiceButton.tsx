import React, { MouseEventHandler, PropsWithChildren } from 'react';

const RollDiceButton = ({
  onClick,
  children,
}: PropsWithChildren<{ onClick: MouseEventHandler<HTMLButtonElement> }>) => (
  <button
    data-testid="roll-dice-button"
    className="btn btn-primary mx-auto my-[25px] mt-[50px] w-fit min-w-32 bg-main-button text-2xl text-main-die"
    onClick={onClick}
  >
    {children}
  </button>
);

export default RollDiceButton;
