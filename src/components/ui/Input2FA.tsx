import { forwardRef } from "react";

export interface Input2FAProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input2FA = forwardRef<HTMLInputElement, Input2FAProps>(
  ({ className = "", ...props }, ref) => (
    <input
      ref={ref}
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      maxLength={6}
      className={`w-full tracking-widest text-center px-3 py-2 sm:py-3 sm:px-4 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
);
Input2FA.displayName = "Input2FA";

export default Input2FA;

/** Example Usage:
 *
 * <Input2FA
 *   value={code}
 *   onChange={(e) => setCode(e.target.value)}
 * />
 */
