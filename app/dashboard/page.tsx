import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";

const metrics = [
  { id: 1, label: "Ventas", value: 1200 },
  { id: 2, label: "Clientes", value: 300 },
  { id: 3, label: "Ingresos", value: 45000 },
  { id: 4, label: "Reembolsos", value: 12 },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen grid md:grid-cols-[200px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <PageContainer>
          <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.id} className="p-4 border rounded text-center">
                <p className="text-sm text-gray-500">{m.label}</p>
                <p className="text-2xl font-bold">{m.value}</p>
              </div>
            ))}
          </div>
        </PageContainer>
        <Footer />
      </div>
    </div>
  );
}
