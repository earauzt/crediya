import Link from "next/link";
import { HomeIcon, BookOpenIcon, DocumentTextIcon, UserIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: HomeIcon },
  { href: "/catalogo", label: "Catálogo", icon: BookOpenIcon },
  { href: "/request", label: "Mis Solicitudes", icon: DocumentTextIcon },
  { href: "#", label: "Perfil", icon: UserIcon },
  { href: "#", label: "Configuración", icon: Cog6ToothIcon },
];

export default function DashboardSidebar() {
  return (
    <aside className="w-60 border-r min-h-screen p-4 hidden md:block">
      <nav className="space-y-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
