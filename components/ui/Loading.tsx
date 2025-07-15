'use client';
import { LoadingProps } from '@/types';

export default function Loading({ type = 'spinner', className = '' }: LoadingProps) {
  if (type === 'skeleton') {
    return <div className={`animate-pulse bg-gray-300 rounded ${className}`} />;
  }
  return (
    <div
      className={`border-4 border-blue-600 border-t-transparent rounded-full animate-spin ${className}`}
      style={{ width: 24, height: 24 }}
    />
  );
}
