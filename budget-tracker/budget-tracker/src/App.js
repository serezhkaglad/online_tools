import React, { useState, useContext } from "react";
import "./App.css";
import { BudgetProvider, BudgetContext } from "./BudgetAppContext"; 
import ConfirmationDialog from "./ConfirmationDialog";
import { SettingsProvider, useSettings } from "./SettingsContext";
import SettingsDialog from "./SettingsDialog";

function BudgetTracker() {
  const { saldo, transactions, addTransaction, deleteTransaction } = useContext(BudgetContext);
  const { currency, theme} = useSettings();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  const handleAddTransaction = () => {
    if (description && amount) {
      const newTransaction = {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
      };
      addTransaction(newTransaction);
      setDescription("");
      setAmount("");
    }
  };

  const handleDelete = (transaction) => {
    setDeleteTarget(transaction);
  };

  const confirmDelete = () => {
    if (deleteTarget) {
      deleteTransaction(deleteTarget);
      setDeleteTarget(null);
    }
  };

  const cancelDelete = () => {
    setDeleteTarget(null);
  };

  return (
    <div className="container">
      <h2>Budget Tracker</h2>
      <div className="balance">Saldo<br />{saldo.toFixed(2)} €</div>

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
        <button onClick={handleAddTransaction}>Add Transaction</button>
      </div>

      <h3>Transactions</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t.id} className={t.amount < 0 ? "expense" : "income"}>
            {t.description} {t.amount.toFixed(2)} €
            <button onClick={() => handleDelete(t)}>Poista</button>
          </li>
        ))}
      </ul>

      {deleteTarget && (
        <ConfirmationDialog
          message="Are you sure you want to delete this item?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}

      {showSettings && <SettingsDialog onClose={() => setShowSettings(false)} />}
    </div>
  );
}

function App() {
  return (
    <SettingsProvider>
    <BudgetProvider>
      <BudgetTracker />
    </BudgetProvider>
    </SettingsProvider>
  );
}

export default App;
