'use client';
export interface LoadingSpinnerProps {
  size?: number; // px
}

export default function LoadingSpinner({ size = 24 }: LoadingSpinnerProps) {
  return (
    <div className="flex items-center justify-center" style={{ height: size, width: size }}>
      <div
        className="border-4 border-[#1D4ED8] border-t-transparent rounded-full animate-spin"
        style={{ width: size, height: size }}
      />
    </div>
  );
}

/** Example Usage:
 *
 * <LoadingSpinner size={32} />
 */
