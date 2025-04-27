import React, { createContext, useState, useContext } from "react";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [currency, setCurrency] = useState("€");

  return (
    <SettingsContext.Provider value={{ theme, setTheme, currency, setCurrency }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
