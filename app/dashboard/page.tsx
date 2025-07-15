'use client';
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Dashboard - Crediya',
  description: 'Resumen de tu actividad financiera',
}
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';
import MetricCard from '@/components/MetricCard';
import dynamic from 'next/dynamic'
const ActivityChart = dynamic(() => import('@/components/ActivityChart'), { ssr: false })
import Card from '@/components/ui/Card';
import ButtonPrimary from '@/src/components/ui/ButtonPrimary';

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
}

export default function DashboardPage() {
  const [metrics, setMetrics] = useState([
    { id: 1, label: 'Crédito disponible', value: 5000 },
    { id: 2, label: 'Solicitudes pendientes', value: 3 },
    { id: 3, label: 'Líneas activas', value: 2 },
    { id: 4, label: 'Pagos atrasados', value: 0 },
  ]);

  const [activity, setActivity] = useState(
    Array.from({ length: 6 }, (_, i) => ({ name: `Mes ${i + 1}`, value: Math.random() * 1000 }))
  );

  const [transactions] = useState<Transaction[]>([
    { id: 1, date: '2025-07-01', description: 'Compra supermercado', amount: -120.5 },
    { id: 2, date: '2025-06-28', description: 'Pago nómina', amount: 1500 },
    { id: 3, date: '2025-06-20', description: 'Crédito aprobado', amount: 2000 },
  ]);

  useEffect(() => {
    const t = setInterval(() => {
      setMetrics((m) => m.map((item) => ({ ...item, value: Math.round(item.value as number + Math.random() * 10 - 5) })));
      setActivity((a) => a.map((pt) => ({ ...pt, value: Math.max(0, pt.value + (Math.random() * 200 - 100)) })));
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen grid md:grid-cols-[220px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <PageContainer>
          <h1 className="text-xl font-semibold mb-6">Dashboard</h1>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
            {metrics.map((m) => (
              <MetricCard key={m.id} label={m.label} value={m.value} />
            ))}
          </div>
          <Card className="mb-6">
            <h2 className="font-semibold mb-2">Actividad reciente</h2>
            <ActivityChart data={activity} />
          </Card>
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <h2 className="font-semibold mb-2">Últimas transacciones</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="py-1">Fecha</th>
                    <th className="py-1">Descripción</th>
                    <th className="py-1 text-right">Monto</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((t) => (
                    <tr key={t.id} className="border-t text-gray-700">
                      <td className="py-1">{t.date}</td>
                      <td className="py-1">{t.description}</td>
                      <td className="py-1 text-right">{t.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
            <Card>
              <h2 className="font-semibold mb-2">Accesos rápidos</h2>
              <div className="flex flex-col gap-2">
                <ButtonPrimary asChild>
                  <a href="/solicitudes">Nueva Solicitud</a>
                </ButtonPrimary>
                <ButtonPrimary asChild>
                  <a href="/catalogo">Ver Catálogo</a>
                </ButtonPrimary>
                <ButtonPrimary asChild>
                  <a href="/perfil">Editar Perfil</a>
                </ButtonPrimary>
              </div>
            </Card>
          </div>
        </PageContainer>
        <Footer />
      </div>
    </div>
  );
}
