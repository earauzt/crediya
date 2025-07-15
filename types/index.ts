import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'search';
  className?: string;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface NotificationProps {
  message: string;
  variant?: 'success' | 'error' | 'info';
  duration?: number;
  onClose?: () => void;
}

export interface LoadingProps {
  type?: 'spinner' | 'skeleton';
  className?: string;
}

export interface DropdownProps {
  buttonLabel: string;
  children: ReactNode;
}

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}
