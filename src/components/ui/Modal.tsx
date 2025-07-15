'use client';
import { ReactNode } from 'react';
import ButtonIcon from './ButtonIcon';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg w-full max-w-md p-4 relative font-[\'Inter\',sans-serif]">
        <ButtonIcon
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
        >
          ×
        </ButtonIcon>
        {children}
      </div>
    </div>
  );
}

/** Example Usage:
 *
 * const [open, setOpen] = useState(false);
 * <>
 *   <ButtonPrimary onClick={() => setOpen(true)}>Abrir</ButtonPrimary>
 *   <Modal isOpen={open} onClose={() => setOpen(false)}>
 *     <p>Contenido del modal</p>
 *   </Modal>
 * </>
 */
