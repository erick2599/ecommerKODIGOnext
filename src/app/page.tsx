import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Bienvenido a tu Tienda Next.js
        </h1>
        <p className="text-xl text-gray-600 max-w-xl mx-auto">
          Una experiencia de e-commerce moderna impulsada por Next.js App Router, Server Components y pasarela de pagos con Stripe.
        </p>

        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
          <Link 
            href="/productos" 
            className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
          >
            Ver Catálogo Público
          </Link>
          <Link 
            href="/login" 
            className="flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-150"
          >
            Iniciar Sesión
          </Link>
        </div>

        <div className="pt-8 border-t border-gray-200 mt-12 grid grid-cols-3 gap-4 text-sm text-gray-500">
          <div>
            <span className="block font-bold text-gray-700">🔒 Seguro</span>
            Cookies httpOnly
          </div>
          <div>
            <span className="block font-bold text-gray-700">⚡ Rápido</span>
            Server Components
          </div>
          <div>
            <span className="block font-bold text-gray-700">💳 Integrado</span>
            Pasarela Stripe
          </div>
        </div>
      </div>
    </main>
  );
}
