import React from "react";
import ReactDOM from "react-dom";

function ErrorModal({ message, onClose }) {
  return ReactDOM.createPortal(
    <div className="error-modal">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById("modal-root")
  );
}

export default ErrorModal;
