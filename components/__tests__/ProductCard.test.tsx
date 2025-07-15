import { render } from '@testing-library/react'
import ProductCard from '../ProductCard'

test('renders product title', () => {
  const { getByText } = render(
    <ProductCard imageSrc="/test.png" title="My Product" description="desc" price={10} installments={3} />
  )
  expect(getByText('My Product')).toBeInTheDocument()
})
