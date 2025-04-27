import React, { createContext, useReducer } from 'react';

// Initial State
const initialState = {
  saldo: 0,
  transactions: []
};

// Reducer function
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

// Create Context
export const BudgetContext = createContext();

// Provider Component
export function BudgetProvider({ children }) {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

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
      deleteTransaction
    }}>
      {children}
    </BudgetContext.Provider>
  );
}
