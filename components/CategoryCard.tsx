import { ReactNode } from "react";

export interface CategoryCardProps {
  icon: ReactNode;
  text: string;
}

/**
 * Card simple para mostrar una categoría con ícono.
 * Ejemplo de uso:
 * ```tsx
 * <CategoryCard icon={<MyIcon />} text="Electrónica" />
 * ```
 */
export default function CategoryCard({ icon, text }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-md bg-[#eceff1]">
      <div className="text-[#006699] text-2xl">{icon}</div>
      <span className="text-sm text-[#003366] font-medium">{text}</span>
    </div>
  );
}
