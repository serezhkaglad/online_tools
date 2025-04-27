import React from "react";
import ReactDOM from "react-dom";
import "./ConfirmationDialog.css"; // we'll make this tiny

function ConfirmationDialog({ message, onConfirm, onCancel }) {
  return ReactDOM.createPortal(
    <div className="confirmation-overlay">
      <div className="confirmation-box">
        <p>{message}</p>
        <div className="confirmation-buttons">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") // 🆕 we will add this to index.html
  );
}

export default ConfirmationDialog;
