import { ButtonHTMLAttributes } from "react";

export interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function ButtonSecondary({ className = "", ...props }: ButtonSecondaryProps) {
  return (
    <button
      className={`bg-[#10B981] text-white px-4 py-2 rounded-md transition-colors hover:opacity-90 disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}

/** Example Usage:
 *
 * <ButtonSecondary onClick={handleCancel}>Cancel</ButtonSecondary>
 */
