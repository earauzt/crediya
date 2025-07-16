"use client";
import { useCallback } from "react";

export interface FilterSidebarProps {
  maxPrice: number;
  onMaxPriceChange: (price: number) => void;
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  installments: number;
  onInstallmentsChange: (value: number) => void;
}

const categories = [
  "Electrónicos",
  "Hogar",
  "Electrodomésticos",
  "Muebles",
];

export default function FilterSidebar({
  maxPrice,
  onMaxPriceChange,
  selectedCategories,
  onCategoryChange,
  installments,
  onInstallmentsChange,
}: FilterSidebarProps) {
  const toggleCategory = useCallback(
    (cat: string) => {
      const exists = selectedCategories.includes(cat);
      if (exists) {
        onCategoryChange(selectedCategories.filter((c) => c !== cat));
      } else {
        onCategoryChange([...selectedCategories, cat]);
      }
    },
    [selectedCategories, onCategoryChange]
  );

  return (
    <aside className="p-4 border-r space-y-6" aria-label="Filtros de productos">
      <div>
        <label className="block text-sm font-medium mb-1">Precio hasta: ${maxPrice}</label>
        <input
          type="range"
          min={0}
          max={5000}
          step={50}
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(Number(e.target.value))}
          className="w-full"
        />
      </div>
      <div>
        <p className="font-medium text-sm mb-2">Categorías</p>
        {categories.map((cat) => (
          <label key={cat} className="flex items-center gap-2 text-sm mb-1">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
              className="rounded"
            />
            {cat}
          </label>
        ))}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="installments">Cuotas</label>
        <select
          id="installments"
          value={installments}
          onChange={(e) => onInstallmentsChange(Number(e.target.value))}
          className="border rounded w-full p-1"
        >
          {[3, 6, 12].map((n) => (
            <option key={n} value={n}>
              {n} cuotas
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
}
