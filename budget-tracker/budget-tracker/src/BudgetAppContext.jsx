import React, { createContext, useReducer, useState, useEffect } from 'react';
import * as api from './api';

const initialState = {
  saldo: 0,
  transactions: []
};

function budgetReducer(state, action) {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      const saldo = action.payload.reduce((sum, t) => sum + Number(t.amount), 0);
      return { transactions: action.payload, saldo };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        saldo: state.saldo + Number(action.payload.amount)
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(t => t.id !== action.payload.id),
        saldo: state.saldo - Number(action.payload.amount)
      };
    default:
      return state;
  }
}

export const BudgetContext = createContext();

const defaultCategories = ["salary", "food", "entertainment", "rent", "utilities"];

export function BudgetProvider({ children }) {
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  const [categories] = useState(defaultCategories);

  useEffect(() => {
    async function loadTransactions() {
      try {
        const data = await api.getTransactions();
        dispatch({ type: 'SET_TRANSACTIONS', payload: data });
      } catch (error) {
        console.error("Failed to load transactions", error);
      }
    }
    loadTransactions();
  }, []);

  const addTransaction = async (transaction) => {
    await api.addTransaction(transaction);
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  const deleteTransaction = async (transaction) => {
    await api.deleteTransaction(transaction.id);
    dispatch({ type: 'DELETE_TRANSACTION', payload: transaction });
  };

  return (
    <BudgetContext.Provider value={{
      saldo: state.saldo,
      transactions: state.transactions,
      addTransaction,
      deleteTransaction,
      categories
    }}>
      {children}
    </BudgetContext.Provider>
  );
}
