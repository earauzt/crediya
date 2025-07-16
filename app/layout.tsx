import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import AuthProvider from "./auth/AuthProvider";
import ClientLayout from "./ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crediya | Plataforma de Financiamiento",
  description: "Fintech B2B para compras en cuotas por empleados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
