'use client';
import { useState } from 'react';
import InputText from './InputText';
import InputPassword from './InputPassword';
import Input2FA from './Input2FA';
import ButtonPrimary from './ButtonPrimary';

export interface LoginFormProps {
  onSubmit?: (values: { email: string; password: string; code?: string }) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ email, password, code: code || undefined });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto font-[\'Inter\',sans-serif]">
      <p className="text-center text-sm text-gray-600">Acceso restringido a empleados</p>
      <InputText
        type="email"
        placeholder="Email corporativo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <InputPassword
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Input2FA
        placeholder="Código 2FA (opcional)"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <ButtonPrimary type="submit">Ingresar</ButtonPrimary>
    </form>
  );
}

/** Example Usage:
 *
 * <LoginForm onSubmit={(values) => console.log(values)} />
 */
