import { CheckboxProps } from '@/types';

export default function Checkbox({ label, className = '', ...props }: CheckboxProps) {
  return (
    <label className={`inline-flex items-center gap-2 ${className}`}>
      <input type="checkbox" className="rounded border-gray-300" {...props} />
      <span>{label}</span>
    </label>
  );
}
