import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders learn React link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn React/i);
  expect(linkElement).toBeInTheDocument();
});
