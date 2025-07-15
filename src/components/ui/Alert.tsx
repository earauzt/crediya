'use client';
import { ReactNode } from 'react';

export interface AlertProps {
  variant?: 'success' | 'error' | 'info';
  children: ReactNode;
}

const variantStyles = {
  success: 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]',
  error: 'bg-red-100 text-red-600 border-red-600',
  info: 'bg-blue-100 text-[#1D4ED8] border-[#1D4ED8]',
};

export default function Alert({ variant = 'info', children }: AlertProps) {
  const classes = variantStyles[variant];
  return (
    <div className={`border-l-4 p-3 rounded-md ${classes} font-[\'Inter\',sans-serif]`}>
      {children}
    </div>
  );
}

/** Example Usage:
 *
 * <Alert variant="success">Operación exitosa</Alert>
 */
