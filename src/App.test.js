import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import App from './App';
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  expect(true)
});
*/
test('full app rendering/home', () => {
  render(<App />, {wrapper: MemoryRouter})

  // verify page content for expected route
  expect(screen.getByText(/home cmp/i)).toBeInTheDocument()
})