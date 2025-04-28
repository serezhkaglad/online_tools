import React from "react";

function Button({ dispatch, type, payload, label }) {
  return (
    <button
      onClick={() =>
        dispatch({ type, payload: payload || label })
      }
    >
      {payload || label}
    </button>
  );
}

export default Button;
