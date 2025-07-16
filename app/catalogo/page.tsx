import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Catálogo - Crediya',
  description: 'Explora nuestro catálogo de productos',
}
import CatalogoClient from './CatalogoClient'

export default function CatalogPage() {
  return <CatalogoClient />
}
