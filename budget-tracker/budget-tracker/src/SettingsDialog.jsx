import React from "react";
import ReactDOM from "react-dom";
import { useSettings } from "./SettingsContext";
import "./SettingsDialog.css";

function SettingsDialog({ onClose }) {
  const { theme, setTheme, currency, setCurrency } = useSettings();

  return ReactDOM.createPortal(
    <div className="settings-overlay">
      <div className="settings-box">
        <h3>Settings</h3>
        <div className="settings-group">
          <label>Currency:</label>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="€">Euro (€)</option>
            <option value="$">Dollar ($)</option>
            <option value="£">Pound (£)</option>
          </select>
        </div>
        <div className="settings-group">
          <label>Theme:</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default SettingsDialog;
