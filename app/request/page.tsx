import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Simulador - Crediya',
  description: 'Calcula tus cuotas de financiamiento',
}
import RequestClient from './RequestClient'

export default function RequestPage() {
  return <RequestClient />
}
