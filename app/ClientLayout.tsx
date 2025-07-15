'use client'

import dynamic from "next/dynamic";

// Dynamic import with ssr: false is now valid in Client Component
const ChatWidget = dynamic(() => import("@/src/components/ui/ChatWidget"), { 
  ssr: false 
});

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      {children}
      {/* Chat de Soporte IA - visible en todas las páginas */}
      <ChatWidget />
    </>
  );
}