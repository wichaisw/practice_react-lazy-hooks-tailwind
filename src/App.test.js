import { render, screen } from '@testing-library/react';
import App from './App';

it('should render main', () => {
  render(<App />);
  const linkElement = screen.getByText(/main/i);
  expect(linkElement).toBeInTheDocument();
});
