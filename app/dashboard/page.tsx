"use client";
import { useEffect, useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MetricCard from "@/components/dashboard/MetricCard";
import ActivityChart, { ActivityData } from "@/components/dashboard/ActivityChart";
import TransactionsTable from "@/components/dashboard/TransactionsTable";
import QuickLinks from "@/components/dashboard/QuickLinks";

interface Metrics {
  credit: number;
  pending: number;
  spent: number;
  requests: number;
}

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<Metrics>({
    credit: 5000,
    pending: 2,
    spent: 1200,
    requests: 5,
  });

  const [activity, setActivity] = useState<ActivityData[]>([
    { name: "Lun", value: 300 },
    { name: "Mar", value: 400 },
    { name: "Mié", value: 350 },
    { name: "Jue", value: 500 },
    { name: "Vie", value: 420 },
  ]);

  const [transactions] = useState([
    { id: "TX123", date: "2025-07-10", amount: 120, status: "Aprobado" },
    { id: "TX124", date: "2025-07-11", amount: 80, status: "Pendiente" },
    { id: "TX125", date: "2025-07-12", amount: 200, status: "Rechazado" },
  ]);

  // Fake realtime updates
  useEffect(() => {
    const id = setInterval(() => {
      setMetrics((m) => ({
        ...m,
        credit: Math.max(0, m.credit + (Math.random() * 200 - 100)),
        pending: Math.round(Math.random() * 5),
      }));
      setActivity((a) =>
        a.map((p) => ({ ...p, value: Math.max(100, p.value + (Math.random() * 50 - 25)) }))
      );
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen grid md:grid-cols-[240px_1fr]">
      <DashboardSidebar />
      <div className="flex flex-col flex-1">
        <DashboardHeader />
        <main className="flex-1 p-4 space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard label="Crédito disponible" value={`$${metrics.credit.toFixed(2)}`} />
            <MetricCard label="Solicitudes pendientes" value={metrics.pending} />
            <MetricCard label="Total gastado" value={`$${metrics.spent.toFixed(2)}`} />
            <MetricCard label="Solicitudes totales" value={metrics.requests} />
          </div>
          <section className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-4 border rounded-md bg-white shadow-sm">
              <h2 className="font-semibold mb-2">Actividad semanal</h2>
              <ActivityChart data={activity} />
            </div>
            <div className="p-4 border rounded-md bg-white shadow-sm">
              <h2 className="font-semibold mb-2">Accesos rápidos</h2>
              <QuickLinks />
            </div>
          </section>
          <section className="p-4 border rounded-md bg-white shadow-sm">
            <h2 className="font-semibold mb-2">Últimas transacciones</h2>
            <TransactionsTable transactions={transactions} />
          </section>
        </main>
      </div>
    </div>
  );
}
