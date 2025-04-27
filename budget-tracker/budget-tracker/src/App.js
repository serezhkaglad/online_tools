import React, { useState, useContext } from "react";
import "./App.css";
import { BudgetProvider, BudgetContext } from "./BudgetAppContext"; 
import ConfirmationDialog from "./ConfirmationDialog";
import { SettingsProvider, useSettings } from "./SettingsContext";
import SettingsDialog from "./SettingsDialog";

function BudgetTracker() {
  const { saldo, transactions, addTransaction, deleteTransaction, categories } = useContext(BudgetContext);
  const { currency, theme} = useSettings();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0] || "salary");
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleAddTransaction = () => {
    if (description && amount) {
      const newTransaction = {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
        category,
      };
      addTransaction(newTransaction);
      setDescription("");
      setAmount("");
      setCategory(categories[0] || "salary");
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
    <div className={`container ${theme}`}>
      <button className="settings-button" onClick={() => setSettingsOpen(true)}>Settings</button>

      <h2>Budget Tracker</h2>
      <div className="balance">Balance<br />{saldo.toFixed(2)} {currency}</div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c, idx) => (
            <option key={idx} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button onClick={handleAddTransaction}>Add Transaction</button>
      </div>

      <h3>Transactions</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t.id} className={t.amount < 0 ? "expense" : "income"}>
            {t.description} ({t.category}) {t.amount.toFixed(2)} {currency}
            <button onClick={() => handleDelete(t)}>Delete</button>
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

      {settingsOpen && <SettingsDialog onClose={() => setSettingsOpen(false)} />}
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
