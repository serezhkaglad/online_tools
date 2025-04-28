import React from "react";

function OperatorComponent({ onSelectOperator }) {
  return (
    <div>
      <label>Select Operator:</label>
      <select onChange={(e) => onSelectOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
    </div>
  );
}

export default OperatorComponent;
