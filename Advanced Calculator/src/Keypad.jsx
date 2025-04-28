import React from "react";
import { ACTIONS } from "./reducer";
import Button from "./Button";

function Keypad({ dispatch }) {
  return (
    <div className="keypad">
      {["1", "2", "3"].map(digit => (
        <Button key={digit} dispatch={dispatch} type={ACTIONS.ADD_DIGIT} payload={digit} label={digit} />
      ))}
      <Button dispatch={dispatch} type={ACTIONS.CHOOSE_OPERATION} payload="+" label="+" />
      {["4", "5", "6"].map(digit => (
        <Button key={digit} dispatch={dispatch} type={ACTIONS.ADD_DIGIT} payload={digit} label={digit} />
      ))}
      <Button dispatch={dispatch} type={ACTIONS.CHOOSE_OPERATION} payload="-" label="-" />
      {["7", "8", "9"].map(digit => (
        <Button key={digit} dispatch={dispatch} type={ACTIONS.ADD_DIGIT} payload={digit} label={digit} />
      ))}
      <Button dispatch={dispatch} type={ACTIONS.CHOOSE_OPERATION} payload="×" label="×" />
      <Button dispatch={dispatch} type={ACTIONS.ADD_DIGIT} payload="0" label="0" />
      <Button dispatch={dispatch} type={ACTIONS.CLEAR} payload={null} label="CLEAR" />
      <Button dispatch={dispatch} type={ACTIONS.EVALUATE} payload={null} label="=" />
      <Button dispatch={dispatch} type={ACTIONS.CHOOSE_OPERATION} payload="÷" label="÷" />
    </div>
  );
}

export default Keypad;
