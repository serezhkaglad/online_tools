import { useContext, useState } from "react";
import "./App.css";
import { BudgetProvider, BudgetContext } from "./BudgetAppContext"; 
import { SettingsProvider, useSettings } from "./SettingsContext";
import { TransactionForm } from "./TransactionForm";
import ConfirmationDialog from "./ConfirmationDialog";
import SettingsDialog from "./SettingsDialog";
import { ExpensePieChart, IncomeExpenseBarChart, SavingsLineChart } from "./Charts";
import { CSVLink } from "react-csv";



function BudgetTracker() {
  const { saldo, transactions, deleteTransaction, categories, addTransaction } = useContext(BudgetContext);
  const { currency, theme } = useSettings();
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

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

      <TransactionForm addTransaction={addTransaction} categories={categories} />

      <h3>Transactions</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t.id} className={t.amount < 0 ? "expense" : "income"}>
            {t.description} ({t.category}) {Number(t.amount).toFixed(2)} {currency}
            <button onClick={() => handleDelete(t)}>Delete</button>
          </li>
        ))}
      </ul>

      <CSVLink data={transactions} filename={"transactions.csv"} className="btn">
      Export Transactions to CSV
      </CSVLink>

      <h3>Expense Pie Chart</h3>
      <ExpensePieChart />

      <h3>Monthly Income vs Expense</h3>
      <IncomeExpenseBarChart />

      <h3>Monthly Savings</h3>
      <SavingsLineChart />

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
