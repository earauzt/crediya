"use client";
import Image from "next/image";
import { useState } from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@/app/auth/AuthProvider";
import InputText from "@/src/components/ui/InputText";
import Notification from "@/components/ui/Notification";

export default function Header() {
  const { user, logout } = useAuth();
  const [search, setSearch] = useState('');
  const [showNotif, setShowNotif] = useState(false);

  return (
    <header className="flex items-center gap-4 p-4 border-b">
      <div className="flex items-center gap-2">
        <Image src="/next.svg" alt="Crediya logo" width={32} height={32} />
        <span className="font-semibold text-xl">Crediya</span>
      </div>
      <InputText
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar..."
        className="hidden md:block max-w-xs ml-4"
      />
      <div className="ml-auto flex items-center gap-4">
        <button
          type="button"
          onClick={() => setShowNotif(true)}
          className="relative"
        >
          <BellIcon className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        {user && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 hidden sm:block">{user.email}</span>
            <button onClick={logout} className="text-sm text-blue-600 hover:underline">
              Salir
            </button>
          </div>
        )}
      </div>
      {showNotif && (
        <div className="fixed top-16 right-4 z-50">
          <Notification
            message="No tienes nuevas notificaciones"
            onClose={() => setShowNotif(false)}
          />
        </div>
      )}
    </header>
  );
}
