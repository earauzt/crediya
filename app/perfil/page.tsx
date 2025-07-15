'use client'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Perfil - Crediya',
  description: 'Informaci\u00f3n de tu cuenta',
}
import { useAuth } from '../auth/AuthProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'

export default function PerfilPage() {
  const { user } = useAuth()
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageContainer>
        <h1 className="text-xl font-semibold mb-4">Perfil</h1>
        <p className="mb-2">Email: {user?.email}</p>
      </PageContainer>
      <Footer />
    </div>
  )
}
