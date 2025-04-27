import React, { createContext, useReducer, useState } from 'react';

const initialState = {
  saldo: 0,
  transactions: []
};

function budgetReducer(state, action) {
  switch (action.type) {
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

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  const deleteTransaction = (transaction) => {
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

