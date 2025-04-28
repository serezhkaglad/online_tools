import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Budget Tracker heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Budget Tracker/i);
  expect(headingElement).toBeInTheDocument();
});