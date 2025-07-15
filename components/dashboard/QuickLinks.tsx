import Link from "next/link";

const links = [
  { href: "/request", label: "Nueva Solicitud" },
  { href: "/catalogo", label: "Explorar Productos" },
  { href: "#", label: "Ver Perfil" },
];

export default function QuickLinks() {
  return (
    <div className="flex flex-col gap-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="px-3 py-2 bg-blue-600 text-white rounded-md text-center"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
