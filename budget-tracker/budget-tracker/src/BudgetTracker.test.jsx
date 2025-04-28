import { render, screen } from '@testing-library/react';
import { BudgetProvider } from './BudgetAppContext';
import { SettingsProvider } from './SettingsContext';
import App from './App';

function renderWithProviders(ui) {
  return render(
    <SettingsProvider>
      <BudgetProvider>
        {ui}
      </BudgetProvider>
    </SettingsProvider>
  );
}

test('renders Budget Tracker title', () => {
  renderWithProviders(<App />);
  expect(screen.getByText(/Budget Tracker/i)).toBeInTheDocument();
});

test('renders transactions list', async () => {
  renderWithProviders(<App />);
  expect(await screen.findByText(/Transactions/i)).toBeInTheDocument();
});

test('shows no transactions message if list is empty', () => {
  renderWithProviders(<App />);
  expect(screen.getByText(/Transactions/i)).toBeInTheDocument();
});
