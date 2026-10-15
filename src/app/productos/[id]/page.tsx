import { Suspense } from 'react';
import ListaProductos from './ListaProductos';
import LoadingProductos from './loading';

export default function ProductosPage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Nuestro Catálogo</h1>
      
      {/* Requisito: Uso de Suspense en secciones pesadas */}
      <Suspense fallback={<LoadingProductos />}>
        <ListaProductos />
      </Suspense>
    </main>
  );
}
