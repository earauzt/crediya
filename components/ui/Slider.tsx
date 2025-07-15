import { SliderProps } from '@/types';

export default function Slider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  className = '',
}: SliderProps) {
  return (
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(e) => onChange(Number(e.target.value))}
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      className={`w-full ${className}`}
    />
  );
}
