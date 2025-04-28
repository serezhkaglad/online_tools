import React, { useState } from "react";
import InputComponent from "./InputComponent";
import OperatorComponent from "./OperatorComponent";
import ResultComponent from "./ResultComponent";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);

  const calculate = () => {
    let res = 0;
    switch (operator) {
      case "+":
        res = number1 + number2;
        break;
      case "-":
        res = number1 - number2;
        break;
      case "*":
        res = number1 * number2;
        break;
      case "/":
        res = number2 !== 0 ? number1 / number2 : "Error";
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <div className="calculator">
      <h1>Simple React Calculator</h1>
      <InputComponent label="First Number" onChange={setNumber1} />
      <InputComponent label="Second Number" onChange={setNumber2} />
      <OperatorComponent onSelectOperator={setOperator} />
      <button onClick={calculate}>Calculate</button>
      <ResultComponent result={result} />
    </div>
  );
}

export default App;
