import React, { useRef, useEffect } from "react";

function Display({ value }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      value={value}
      readOnly
      className="calculator-display"
    />
  );
}

export default Display;
