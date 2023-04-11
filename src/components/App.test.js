import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

it('renders the Home page by default', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  const homePage = getByTestId('home-page')
  expect(homePage).toBeInTheDocument()
})