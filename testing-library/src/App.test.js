import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link that points to little lemon', () => {
  render(<App />);
  const linkElement = screen.getByText("Little Lemon Restaurant");
  expect(linkElement).toBeInTheDocument();
});
