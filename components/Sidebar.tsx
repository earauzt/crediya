import Link from "next/link";
import {
  HomeIcon,
  Squares2X2Icon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <aside className="w-60 p-4 border-r min-h-screen">
      <nav className="flex flex-col gap-3 text-sm">
        <Link href="/dashboard" className="flex items-center gap-2 hover:underline">
          <HomeIcon className="w-5 h-5" /> Dashboard
        </Link>
        <Link href="/catalogo" className="flex items-center gap-2 hover:underline">
          <Squares2X2Icon className="w-5 h-5" /> Catálogo
        </Link>
        <Link href="/solicitudes" className="flex items-center gap-2 hover:underline">
          <ClipboardDocumentListIcon className="w-5 h-5" /> Mis Solicitudes
        </Link>
        <Link href="/perfil" className="flex items-center gap-2 hover:underline">
          <UserCircleIcon className="w-5 h-5" /> Perfil
        </Link>
        <Link href="#" className="flex items-center gap-2 hover:underline">
          <Cog6ToothIcon className="w-5 h-5" /> Configuración
        </Link>
      </nav>
    </aside>
  );
}
