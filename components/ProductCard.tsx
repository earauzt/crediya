import Image from "next/image";

export interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: number;
  installmentText: string;
  onBuy?: () => void;
}

/**
 * Card para mostrar un producto con diseño mobile-first.
 * Ejemplo de uso:
 * ```tsx
 * <ProductCard
 *   imageSrc="/producto.jpg"
 *   title="Smartphone"
 *   price={499.99}
 *   installmentText="12 cuotas de $49.99"
 *   onBuy={() => console.log('Comprar')}
 * />
 * ```
 */
export default function ProductCard({
  imageSrc,
  title,
  price,
  installmentText,
  onBuy,
}: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center bg-[#f8f8f8] sm:flex-row sm:p-6">
      <div className="w-full sm:w-1/3">
        <Image
          src={imageSrc}
          alt={title}
          width={200}
          height={200}
          className="object-contain w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4 text-center sm:text-left sm:mt-0 sm:w-2/3 sm:pl-4">
        <h3 className="text-lg font-semibold text-[#003366]">{title}</h3>
        <p className="text-[#006699] text-xl font-bold">${price.toFixed(2)}</p>
        <p className="text-sm text-[#555]">{installmentText}</p>
        <button
          onClick={onBuy}
          className="mt-2 bg-[#006699] text-white py-2 px-4 rounded-md hover:bg-[#005080] transition-colors"
        >
          Comprar en cuotas
        </button>
      </div>
    </div>
  );
}
