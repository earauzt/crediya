"use client";
import { useState } from "react";
import Image from "next/image";

export interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  price: number;
  lowestPrice?: boolean;
  installments: number;
  onBuy?: () => void;
}

/**
 * Card de producto reutilizable con cálculo de cuotas.
 */
export default function ProductCard({
  imageSrc,
  title,
  description,
  price,
  lowestPrice,
  installments,
  onBuy,
}: ProductCardProps) {
  const [selectedInstallments, setSelectedInstallments] = useState<number>(installments);
  const perInstallment = price / selectedInstallments;

  return (
    <div className="border rounded-lg p-4 flex flex-col bg-white gap-2 transition-shadow hover:shadow">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={200}
        className="w-full h-40 object-contain"
      />
      <h3 className="font-semibold text-[#003366]">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="flex items-center gap-2">
        <span className="text-[#006699] font-bold text-lg">${price.toFixed(2)}</span>
        {lowestPrice && (
          <span className="text-xs text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
            Precio más bajo
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 text-sm">
        <select
          value={selectedInstallments}
          onChange={(e) => setSelectedInstallments(Number(e.target.value))}
          className="border rounded p-1 text-sm"
        >
          {[3, 6, 12].map((n) => (
            <option key={n} value={n}>{n} cuotas</option>
          ))}
        </select>
        <span>
          {selectedInstallments} cuotas de ${perInstallment.toFixed(2)}
        </span>
      </div>
      <button
        onClick={onBuy}
        className="mt-auto bg-[#006699] text-white py-2 px-4 rounded hover:bg-[#005080]"
      >
        Comprar en cuotas
      </button>
    </div>
  );
}
