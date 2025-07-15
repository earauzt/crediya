import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-60 p-4 border-r min-h-screen">
      <nav className="flex flex-col gap-2">
        <Link className="hover:underline" href="/dashboard">Dashboard</Link>
        <Link className="hover:underline" href="/catalogo">Catálogo</Link>
        <Link className="hover:underline" href="/solicitudes">Solicitudes</Link>
        <Link className="hover:underline" href="/perfil">Perfil</Link>
      </nav>
    </aside>
  );
}
