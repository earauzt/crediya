import { CardProps } from '@/types';

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white p-4 rounded shadow ${className}`}>{children}</div>
  );
}
