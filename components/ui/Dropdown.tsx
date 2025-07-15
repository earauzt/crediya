'use client';
import { useState } from 'react';
import { DropdownProps } from '@/types';

export default function Dropdown({ buttonLabel, children }: DropdownProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="px-4 py-2 rounded bg-blue-600 text-white"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {buttonLabel}
      </button>
      {open && (
        <div
          className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-md"
          role="menu"
        >
          {children}
        </div>
      )}
    </div>
  );
}
