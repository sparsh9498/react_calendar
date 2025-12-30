import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders input date', () => {
  render(<App />);
  const linkElement = screen.getByTestId('input-date');
  fireEvent.click(linkElement);
  expect(linkElement).toBeInTheDocument();
});
