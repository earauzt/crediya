'use client'
import { useState } from 'react'
import Link from 'next/link'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import { InputText, InputPassword, Input2FA, ButtonPrimary, ButtonSecondary } from '@/src/components/ui'
import { supabase } from '@/src/lib/supabaseClient'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
    if (signInError) {
      setError(signInError.message)
      setLoading(false)
      return
    }
    if (code) {
      const { error: otpError } = await supabase.auth.verifyOtp({ token: code, type: 'totp' })
      if (otpError) {
        setError(otpError.message)
        setLoading(false)
        return
      }
    }
    if (!remember) {
      // Session persistence is handled by supabase-js; for a non persistent session we remove it on unload
      window.addEventListener('beforeunload', () => supabase.auth.signOut())
    }
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Bienvenido</h1>
        <p className="text-center text-sm text-gray-500 mb-6">Acceso exclusivo para empleados autorizados</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputText
            type="email"
            placeholder="nombre@empresa.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <InputPassword
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="pr-10"
            />
            <LockClosedIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <Input2FA
            placeholder="Ingrese el código 2FA"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="rounded"
              />
              Recordarme
            </label>
            <Link href="#" className="text-blue-600 text-sm hover:underline">
              ¿Olvidó su contraseña?
            </Link>
          </div>
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          <ButtonPrimary type="submit" disabled={loading} className="w-full">
            {loading ? 'Ingresando...' : 'Ingresar'}
          </ButtonPrimary>
        </form>
      </div>
      <div className="mt-8 text-center">
        <p className="mb-2 text-sm">¿Necesita ayuda?</p>
        <div className="flex justify-center gap-4">
          <ButtonSecondary asChild>
            <Link href="#">Soporte</Link>
          </ButtonSecondary>
          <ButtonSecondary asChild>
            <Link href="#">FAQ</Link>
          </ButtonSecondary>
        </div>
      </div>
      <footer className="mt-8 text-center text-sm text-gray-500">
        <Link href="#" className="hover:underline">Empresa</Link>
        <span className="mx-2">·</span>
        <Link href="#" className="hover:underline">Soporte</Link>
        <span className="mx-2">·</span>
        <Link href="#" className="hover:underline">Legal</Link>
      </footer>
    </div>
  )
}
