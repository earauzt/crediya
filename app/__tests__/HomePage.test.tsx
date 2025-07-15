import { render } from '@testing-library/react'
import Home from '../page'

test('home renders products', () => {
  const { getByText } = render(<Home />)
  expect(getByText('Producto 1')).toBeInTheDocument()
})
