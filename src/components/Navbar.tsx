'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  // Requisito: Obtener los productos del carrito desde el estado local (Context)
  const { cart } = useCart();
  
  // Calcular la cantidad total de artículos en el carrito
  const totalArticulos = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Nombre de la Tienda */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-indigo-600 tracking-tight">
              🚀 NextShop
            </Link>
          </div>

          {/* Enlaces de Navegación Centrales */}
          <div className="hidden sm:flex space-x-8">
            <Link href="/productos" className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors">
              Catálogo
            </Link>
            <Link href="/historial" className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors">
              Mis Compras
            </Link>
          </div>

          {/* Botones de Acción (Carrito y Autenticación) */}
          <div className="flex items-center space-x-4">
            
            {/* Ícono de Carrito de Compras */}
            <Link href="/checkout" className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              
              {/* Indicador de cantidad con estado reactivo */}
              {totalArticulos > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {totalArticulos}
                </span>
              )}
            </Link>

            {/* Acceso a cuenta */}
            <Link 
              href="/login" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Ingresar
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
