'use client';
export interface ProgressBarProps {
  value: number; // 0 to 100
}

export default function ProgressBar({ value }: ProgressBarProps) {
  const width = Math.min(100, Math.max(0, value));
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#1D4ED8] transition-all"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

/** Example Usage:
 *
 * <ProgressBar value={50} />
 */
