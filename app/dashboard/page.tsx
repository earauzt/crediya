import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Dashboard - Crediya',
  description: 'Resumen de tu actividad financiera',
}
import DashboardClient from './DashboardClient'

export default function DashboardPage() {
  return <DashboardClient />
}
