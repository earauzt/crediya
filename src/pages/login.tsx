import { InputText, InputPassword, Input2FA, ButtonPrimary, ButtonSecondary } from "@/src/components/ui";
import { EnvelopeIcon, LockClosedIcon, ShieldCheckIcon, LifebuoyIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] font-[\'Inter\',sans-serif] p-4">
      <div className="w-full max-w-md space-y-6 bg-white p-6 rounded-lg shadow-sm">
        <div className="text-center space-y-1">
          <img src="/next.svg" alt="Logo" className="mx-auto h-10 w-auto" />
          <h1 className="text-2xl font-semibold text-gray-800">Bienvenido</h1>
          <p className="text-sm text-gray-500">Acceso exclusivo para empleados autorizados</p>
        </div>
        <form className="space-y-4">
          <div className="relative">
            <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <InputText type="email" required placeholder="nombre@empresa.com" className="pl-10" />
          </div>
          <div className="relative">
            <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <InputPassword required placeholder="Contraseña" className="pl-10" />
          </div>
          <div className="relative">
            <ShieldCheckIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <Input2FA placeholder="Código de verificación 2FA" className="pl-10" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-[#1D4ED8]" />
              Recordarme
            </label>
            <a href="#" className="text-[#1D4ED8] hover:underline">¿Olvidó su contraseña?</a>
          </div>
          <ButtonPrimary type="submit" className="w-full py-3 text-base">Ingresar</ButtonPrimary>
        </form>
        <div className="text-center text-sm pt-4 border-t border-gray-200 space-y-2">
          <p>¿Necesita ayuda?</p>
          <div className="flex justify-center gap-3">
            <ButtonSecondary type="button" className="flex items-center gap-1 px-3 py-2 text-sm">
              <LifebuoyIcon className="h-4 w-4" /> Soporte
            </ButtonSecondary>
            <ButtonSecondary type="button" className="flex items-center gap-1 px-3 py-2 text-sm">
              <QuestionMarkCircleIcon className="h-4 w-4" /> FAQ
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Ejemplo de uso
 * <LoginPage />
 */
