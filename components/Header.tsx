"use client";
import Image from "next/image";
import { useAuth } from "@/app/auth/AuthProvider";

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="flex items-center gap-3 p-4 border-b">
      <Image src="/next.svg" alt="Crediya logo" width={40} height={40} />
      <span className="font-semibold text-xl">Crediya</span>
      {user && (
        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm text-gray-600">{user.email}</span>
          <button onClick={logout} className="text-sm text-blue-600 hover:underline">Salir</button>
        </div>
      )}
    </header>
  );
}
