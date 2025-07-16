import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Solicitudes - Crediya',
  description: 'Gestiona tus solicitudes de crédito',
}
import SolicitudesClient from './SolicitudesClient'

export default function SolicitudesPage() {
  return <SolicitudesClient />
}
