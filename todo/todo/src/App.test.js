import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the todo app', () => {
  render(<App />);
  const linkElement = screen.getByText(/budget tracker/i);
  expect(linkElement).toBeInTheDocument();
});
