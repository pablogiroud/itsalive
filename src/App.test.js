import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sigue vivo title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sigue vivo/i);
  expect(linkElement).toBeInTheDocument();
});
