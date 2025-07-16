import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Perfil - Crediya',
  description: 'Información de tu cuenta',
}
import PerfilClient from './PerfilClient'

export default function PerfilPage() {
  return <PerfilClient />
}
