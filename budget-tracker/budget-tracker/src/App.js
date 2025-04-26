import React, { useState } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = () => {
    if (description && amount) {
      const newTransaction = {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
      };
      setTransactions([newTransaction, ...transactions]);
      setDescription("");
      setAmount("");
    }
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const balance = transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="container">
      <h2>Budget tracker</h2>
      <div className="balance">Saldo<br />{balance.toFixed(2)} €</div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Sum"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addTransaction}>Add Transaction</button>
      </div>

      <h3>Transactions</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t.id} className={t.amount < 0 ? "expense" : "income"}>
            {t.description} {t.amount.toFixed(2)} €
            <button onClick={() => deleteTransaction(t.id)}>Poista</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
