import { ButtonHTMLAttributes } from "react";

export interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function ButtonPrimary({ className = "", ...props }: ButtonPrimaryProps) {
  return (
    <button
      className={`bg-[#1D4ED8] text-white px-4 py-2 rounded-md transition-colors hover:opacity-90 disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}

/** Example Usage:
 *
 * <ButtonPrimary onClick={handleSubmit}>Submit</ButtonPrimary>
 */
