'use client'
import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import FilterSidebar from '@/components/FilterSidebar'
import PageContainer from '@/components/PageContainer'

interface Product {
  id: number
  imageSrc: string
  title: string
  description: string
  price: number
  category: string
  lowestPrice?: boolean
}

const products: Product[] = [
  {
    id: 1,
    imageSrc: '/next.svg',
    title: 'Laptop Ultrafina 15"',
    description: 'Intel Core i5, 8GB RAM, 512GB SSD',
    price: 999,
    category: 'Electrónicos',
  },
  {
    id: 2,
    imageSrc: '/vercel.svg',
    title: 'Smart TV 55"',
    description: '4K UHD, HDR, Android TV',
    price: 799,
    category: 'Electrónicos',
  },
  {
    id: 3,
    imageSrc: '/globe.svg',
    title: 'Smartphone Premium',
    description: '128GB, 8GB RAM, 5G',
    price: 699,
    category: 'Electrónicos',
  },
  {
    id: 4,
    imageSrc: '/window.svg',
    title: 'Refrigerador No Frost',
    description: '420L, Dispensador de Agua',
    price: 1399,
    category: 'Electrodomésticos',
  },
  {
    id: 5,
    imageSrc: '/file.svg',
    title: 'Lavadora Automática',
    description: '15kg, Wifi, Smart Control',
    price: 899,
    category: 'Electrodomésticos',
  },
  {
    id: 6,
    imageSrc: '/next.svg',
    title: 'Aire Acondicionado Split',
    description: '12000 BTU, Inverter',
    price: 599,
    category: 'Electrodomésticos',
    lowestPrice: true,
  },
]

export default function CatalogoClient() {
  const [search, setSearch] = useState('')
  const [maxPrice, setMaxPrice] = useState(5000)
  const [categories, setCategories] = useState<string[]>([])
  const [installments, setInstallments] = useState(3)

  const filtered = products.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    const matchesPrice = p.price <= maxPrice
    const matchesCategory =
      categories.length === 0 || categories.includes(p.category)
    return matchesSearch && matchesPrice && matchesCategory
  })

  return (
    <div className="min-h-screen grid md:grid-cols-[250px_1fr]">
      <FilterSidebar
        maxPrice={maxPrice}
        onMaxPriceChange={setMaxPrice}
        selectedCategories={categories}
        onCategoryChange={setCategories}
        installments={installments}
        onInstallmentsChange={setInstallments}
      />
      <div className="flex flex-col">
        <header className="p-4 border-b">
          <input
            type="text"
            placeholder="Buscar productos por nombre o características..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </header>
        <PageContainer>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard
                key={p.id}
                imageSrc={p.imageSrc}
                title={p.title}
                description={p.description}
                price={p.price}
                lowestPrice={p.lowestPrice}
                installments={installments}
              />
            ))}
          </div>
        </PageContainer>
      </div>
    </div>
  )
}
