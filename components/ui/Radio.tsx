import { RadioProps } from '@/types';

export default function Radio({ label, className = '', ...props }: RadioProps) {
  return (
    <label className={`inline-flex items-center gap-2 ${className}`}>
      <input type="radio" className="rounded-full border-gray-300" {...props} />
      <span>{label}</span>
    </label>
  );
}
