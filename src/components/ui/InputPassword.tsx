import { forwardRef } from "react";

export interface InputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ className = "", ...props }, ref) => (
    <input
      ref={ref}
      type="password"
      className={`w-full px-3 py-2 sm:py-3 sm:px-4 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
);
InputPassword.displayName = "InputPassword";

export default InputPassword;

/** Example Usage:
 *
 * <InputPassword
 *   placeholder="Password"
 *   value={password}
 *   onChange={(e) => setPassword(e.target.value)}
 * />
 */
