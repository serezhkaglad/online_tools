import React from "react";
import "./App.css";
import { ThemeProvider } from "./ThemeContext";
import Calculator from "./Calculator";

function App() {
  return (
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
