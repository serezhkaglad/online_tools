import React from "react";
import { ACTIONS } from "./reducer";

function Button({ dispatch, type, payload, label }) {
  function handleClick() {
    if (type === ACTIONS.ADD_DIGIT) {
      dispatch({ type, payload: { digit: payload } });
    } else {
      dispatch({ type, payload });
    }
  }

  return (
    <button onClick={handleClick}>
      {label || payload}
    </button>
  );
}

export default Button;
