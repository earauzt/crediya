"use client";
import Image from "next/image";
import { useState } from "react";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import InputText from "@/src/components/ui/InputText";
import ButtonIcon from "@/src/components/ui/ButtonIcon";

export default function DashboardHeader() {
  const [notifications] = useState(3);
  return (
    <header className="flex items-center justify-between gap-4 p-4 border-b">
      <div className="flex items-center gap-2">
        <Image src="/next.svg" alt="Crediya logo" width={32} height={32} />
        <span className="font-semibold text-xl">Crediya</span>
      </div>
      <div className="flex-1 max-w-md">
        <InputText placeholder="Buscar..." />
      </div>
      <div className="flex items-center gap-2">
        <ButtonIcon aria-label="notificaciones">
          <div className="relative">
            <BellIcon className="w-6 h-6" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </div>
        </ButtonIcon>
        <UserCircleIcon className="w-8 h-8 text-gray-600" />
      </div>
    </header>
  );
}
