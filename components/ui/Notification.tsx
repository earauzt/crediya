'use client';
import { useEffect } from 'react';
import { NotificationProps } from '@/types';

const variantClasses: Record<NonNullable<NotificationProps['variant']>, string> = {
  success: 'bg-green-600 text-white',
  error: 'bg-red-600 text-white',
  info: 'bg-blue-600 text-white',
};

export default function Notification({
  message,
  variant = 'info',
  duration = 3000,
  onClose,
}: NotificationProps) {
  useEffect(() => {
    const t = setTimeout(() => onClose?.(), duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`px-4 py-2 rounded shadow transition-opacity ${variantClasses[variant]}`}
    >
      {message}
    </div>
  );
}
