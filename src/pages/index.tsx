import { InputText } from "@/src/components/ui";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const mockProducts = [
  { id: 1, imageSrc: '/next.svg', title: 'Producto Genérico', desc: '8GB RAM, 256GB', price: 999, installment: '3 cuotas de $333' },
  { id: 2, imageSrc: '/vercel.svg', title: 'Artículo Hogar', desc: 'Tamaño mediano', price: 750, installment: '6 cuotas de $125' },
  { id: 3, imageSrc: '/globe.svg', title: 'Equipo Oficina', desc: 'Pantalla 24"', price: 450, installment: '3 cuotas de $150' },
];

export default function MarketplacePage() {
  const [query, setQuery] = useState('');
  return (
    <div className="min-h-screen bg-[#F9FAFB] font-[\'Inter\',sans-serif] p-4 space-y-4">
      <header className="flex justify-center mb-4">
        <img src="/next.svg" alt="Logo" className="h-8" />
      </header>
      <div className="max-w-2xl mx-auto relative">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <InputText
          placeholder="Buscar productos por nombre o características..."
          className="pl-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-64 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Rango de precio</label>
            <input type="range" min="0" max="5000" className="w-full" />
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Categorías</p>
            <label className="block"><input type="checkbox" className="mr-2" />Electrónicos</label>
            <label className="block"><input type="checkbox" className="mr-2" />Hogar</label>
            <label className="block"><input type="checkbox" className="mr-2" />Electrodomésticos</label>
            <label className="block"><input type="checkbox" className="mr-2" />Muebles</label>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Número de cuotas</label>
            <select className="w-full border rounded-md p-2">
              <option>3</option>
              <option>6</option>
              <option>12</option>
            </select>
          </div>
        </aside>
        <main className="flex-1 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mockProducts.map((p) => (
            <div key={p.id} className="space-y-2">
              <ProductCard
                imageSrc={p.imageSrc}
                title={p.title}
                price={p.price}
                installmentText={p.installment}
                onBuy={() => {}}
              />
              <a href="#" className="text-xs text-[#1D4ED8] hover:underline">Precio más bajo</a>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

/** Ejemplo de uso
 * <MarketplacePage />
 */
