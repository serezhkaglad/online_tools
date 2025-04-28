const API_URL = "https://www.cc.puv.fi/~e2205683/php/BudgetTrackerAPI.php";

export async function getTransactions() {
  const response = await fetch(`${API_URL}`);
  if (!response.ok) {
    throw new Error('Failed to fetch transactions');
  }
  return await response.json();
}

export async function addTransaction(transaction) {
  const data = {
    type: transaction.amount >= 0 ? "income" : "expense",
    category: transaction.category,
    amount: transaction.amount,
    description: transaction.description,
    date: new Date().toISOString().split('T')[0], // format YYYY-MM-DD
  };
  
  await fetch(`${API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

export async function deleteTransaction(id) {
  await fetch(`${API_URL}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
  });
}
