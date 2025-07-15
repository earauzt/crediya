import { ButtonHTMLAttributes } from "react";

export type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonIcon({ className = "", ...props }: ButtonIconProps) {
  return (
    <button
      className={`p-2 rounded-full flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors ${className}`}
      {...props}
    />
  );
}

/** Example Usage:
 *
 * <ButtonIcon aria-label="menu" onClick={toggleMenu}>
 *   <MenuIcon />
 * </ButtonIcon>
 */
