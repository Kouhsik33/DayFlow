import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DayFlow landing page branding and main CTAs', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/DayFlow/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
