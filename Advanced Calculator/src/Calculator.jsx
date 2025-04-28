import React, { useReducer } from "react";
import { reducer, ACTIONS } from "./reducer";
import { useTheme } from "./ThemeContext";
import Display from "./Display";
import Keypad from "./Keypad";
import ErrorModal from "./ErrorModal";

function Calculator() {
  const [state, dispatch] = useReducer(reducer, {});
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`calculator ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Display value={state.currentValue || state.previousValue || "0"} />
      <Keypad dispatch={dispatch} />
      {state.error && <ErrorModal message={state.error} onClose={() => dispatch({ type: ACTIONS.CLEAR_ERROR })} />}
    </div>
  );
}

export default Calculator;
