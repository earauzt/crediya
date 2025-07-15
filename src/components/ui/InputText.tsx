import { forwardRef } from "react";

export interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ className = "", ...props }, ref) => (
    <input
      ref={ref}
      type="text"
      className={`w-full px-3 py-2 sm:py-3 sm:px-4 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
);
InputText.displayName = "InputText";

export default InputText;

/** Example Usage:
 *
 * <InputText
 *   placeholder="Your name"
 *   value={value}
 *   onChange={(e) => setValue(e.target.value)}
 * />
 */
