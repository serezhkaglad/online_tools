import { render, screen, fireEvent } from '@testing-library/react';
import { TransactionForm } from './TransactionForm';

const mockCategories = ["salary", "food", "entertainment"];

describe('TransactionForm', () => {
  test('renders form fields', () => {
    render(<TransactionForm setOptimisticTransactions={() => {}} addTransaction={() => {}} categories={mockCategories} />);
    
    expect(screen.getByPlaceholderText(/Enter description/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter amount/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

test('submits form', async () => {
  const mockAddTransaction = jest.fn();

  render(<TransactionForm addTransaction={mockAddTransaction} categories={mockCategories} />);

  fireEvent.change(screen.getByPlaceholderText(/Enter description/i), { target: { value: 'Test transaction' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter amount/i), { target: { value: '100' } });
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'salary' } });

  fireEvent.submit(screen.getByTestId('transaction-form'));
  });
});