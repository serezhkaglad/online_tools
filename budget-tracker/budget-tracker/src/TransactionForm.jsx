import React, { useState } from "react";
import { SubmitButton } from "./SubmitButton";

export function TransactionForm({ addTransaction, categories }) {
  const [pending, setPending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setPending(true);

    const formData = new FormData(event.target);
    const description = formData.get("description")?.trim();
    const amount = parseFloat(formData.get("amount"));
    const category = formData.get("category");

    const errors = {};
    if (!description) errors.description = "Description is required.";
    if (isNaN(amount) || amount === 0) errors.amount = "Enter a valid amount.";
    if (!category) errors.category = "Select a category.";

    if (Object.keys(errors).length > 0) {
      setPending(false);
      alert(Object.values(errors).join("\n"));
      return;
    }

    const newTransaction = {
      description,
      amount,
      category,
      type: amount >= 0 ? "income" : "expense",
      date: new Date().toISOString().split('T')[0],
    };

    try {
      await addTransaction(newTransaction);
    } catch (err) {
      alert("Failed to save transaction.");
    } finally {
      setPending(false);
      event.target.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="input-group" data-testid="transaction-form">
      <input type="text" name="description" placeholder="Enter description..." />
      <input type="number" name="amount" placeholder="Enter amount..." />
      <select name="category">
        {categories.map((c, idx) => (
          <option key={idx} value={c}>{c}</option>
        ))}
      </select>
      <SubmitButton pending={pending} />
    </form>
  );
}
