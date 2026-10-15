import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext"; // Importar proveedor del carrito
import Navbar from "@/components/Navbar"; // Importar componente Navbar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce Next.js",
  description: "Frontend de e-commerce consumiendo API de Laravel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased`}
        suppressHydrationWarning
      >
        {/* Proveedor del carrito global */}
        <CartProvider>
          <Navbar /> {/* Se renderiza arriba de todo el contenido */}
          <div className="flex-grow">
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
