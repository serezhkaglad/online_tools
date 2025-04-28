import React from "react";

function InputComponent({ label, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input type="number" onChange={(e) => onChange(Number(e.target.value))} />
    </div>
  );
}

export default InputComponent;
