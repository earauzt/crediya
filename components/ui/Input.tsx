import { forwardRef } from 'react';
import { InputProps } from '@/types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', className = '', ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={`w-full px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
);
Input.displayName = 'Input';

export default Input;
