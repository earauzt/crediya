'use client'
import { useState } from 'react'
import { InputText, ButtonPrimary } from '@/src/components/ui'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'

export default function RequestClient() {
  const [amount, setAmount] = useState('')
  const [months, setMonths] = useState('')
  const [payment, setPayment] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const a = parseFloat(amount)
    const m = parseInt(months, 10)
    if (!isNaN(a) && !isNaN(m) && m > 0) {
      setPayment(a / m)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageContainer>
        <h1 className="text-xl font-semibold mb-4">Simulador de compra</h1>
        <form onSubmit={handleSubmit} className="mx-auto max-w-sm flex flex-col gap-4">
          <InputText
            type="number"
            placeholder="Monto"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <InputText
            type="number"
            placeholder="Meses"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
          />
          <ButtonPrimary type="submit">Calcular</ButtonPrimary>
        </form>
        {payment !== null && (
          <p className="mt-4 text-center">Cuota estimada: ${payment.toFixed(2)}</p>
        )}
      </PageContainer>
      <Footer />
    </div>
  )
}
