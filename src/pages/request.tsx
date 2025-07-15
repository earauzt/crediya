'use client';
import { useState } from 'react';
import { InputText, ButtonPrimary, ProgressBar } from "@/src/components/ui";
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function RequestPage() {
  const [step, setStep] = useState(1);
  const [months, setMonths] = useState('3');
  const [amount, setAmount] = useState('1000');

  const installment = parseFloat(amount) / parseInt(months || '1', 10);

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-[\'Inter\',sans-serif] p-4 space-y-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h1 className="text-xl font-semibold text-center">Proceso de Compra</h1>
        <ProgressBar value={(step / 3) * 100} />

        {step === 1 && (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
            <InputText disabled value="Juan Pérez" />
            <InputText disabled value="juan@empresa.com" />
            <label className="block text-sm">Número de cuotas</label>
            <select value={months} onChange={(e) => setMonths(e.target.value)} className="w-full border rounded-md p-2">
              <option>3</option>
              <option>6</option>
              <option>12</option>
            </select>
            <ButtonPrimary type="submit" className="w-full">Continuar</ButtonPrimary>
          </form>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Monto</label>
              <InputText type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <p className="text-sm text-gray-600">Cuota estimada: ${installment.toFixed(2)}</p>
            <ButtonPrimary onClick={() => setStep(3)} className="w-full">Siguiente</ButtonPrimary>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 text-center">
            <CheckCircleIcon className="w-12 h-12 text-[#10B981] mx-auto" />
            <p className="text-sm">Estado de verificación: <strong>Verificado</strong></p>
            <ButtonPrimary className="w-full">Confirmar Compra</ButtonPrimary>
          </div>
        )}
      </div>
    </div>
  );
}

/** Ejemplo de uso
 * <RequestPage />
 */
