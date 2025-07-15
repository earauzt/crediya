import { ButtonIcon } from "@/src/components/ui";
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const metrics = [
  { label: 'Ventas Totales', value: '$128.5k', change: '+12.5%' },
  { label: 'Empleados Activos', value: '2,450', change: '+8.2%' },
  { label: 'Tasa de Aprobación', value: '95.8%', change: '−2.1%' },
  { label: 'Tiempo Promedio', value: '24min', change: '+5.3%' },
];

const validation = [
  { id: 1, image: '/next.svg', name: 'Producto A', price: 120, newPrice: 110 },
  { id: 2, image: '/vercel.svg', name: 'Producto B', price: 220, newPrice: 210 },
];

const employees = [
  { id: 1, name: 'Ana Torres', status: 'Activo', cuota: '$120' },
  { id: 2, name: 'Luis Gómez', status: 'Pendiente', cuota: '$80' },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] font-[\'Inter\',sans-serif] p-4 space-y-6">
      <header className="flex justify-between items-center bg-white p-4 rounded-md shadow-sm">
        <div className="flex items-center gap-2">
          <img src="/next.svg" alt="Logo" className="h-8" />
        </div>
        <nav className="flex gap-4 text-sm">
          <a href="#" className="text-[#1D4ED8] hover:underline">Ayuda</a>
          <a href="#" className="text-[#1D4ED8] hover:underline">Contacto</a>
        </nav>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, idx) => (
          <div key={idx} className="bg-white p-4 rounded-md shadow-sm text-center space-y-1">
            <p className="text-sm text-gray-500">{m.label}</p>
            <p className="text-xl font-semibold">{m.value}</p>
            <p className="text-xs text-gray-400">{m.change}</p>
          </div>
        ))}
      </section>

      <section className="bg-white p-4 rounded-md shadow-sm space-y-4">
        <h2 className="font-medium">Validación de Precios</h2>
        {validation.map((p) => (
          <div key={p.id} className="flex items-center justify-between border-b py-2 last:border-b-0">
            <div className="flex items-center gap-2">
              <img src={p.image} alt="" className="h-10 w-10 object-contain" />
              <div>
                <p className="text-sm">{p.name}</p>
                <p className="text-xs text-gray-500">Actual: ${p.price} - Nuevo: ${p.newPrice}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <ButtonIcon aria-label="aceptar"><CheckIcon className="h-5 w-5 text-[#10B981]"/></ButtonIcon>
              <ButtonIcon aria-label="rechazar"><XMarkIcon className="h-5 w-5 text-red-600"/></ButtonIcon>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-white p-4 rounded-md shadow-sm space-y-4">
        <h2 className="font-medium">Empleados Afiliados</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left">
              <th>Nombre</th>
              <th>Estado</th>
              <th>Monto cuota</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e) => (
              <tr key={e.id} className="border-t">
                <td className="py-1">{e.name}</td>
                <td><span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs">{e.status}</span></td>
                <td>{e.cuota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="bg-white p-4 rounded-md shadow-sm">
        <h2 className="font-medium">Panel adicional</h2>
        {/* Placeholder para configuración y exportación */}
        <div className="h-24 flex items-center justify-center text-gray-400">Configuración del sistema...</div>
      </section>
    </div>
  );
}

/** Ejemplo de uso
 * <DashboardPage />
 */
