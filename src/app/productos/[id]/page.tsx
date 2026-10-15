import { Suspense } from 'react';
import ListaProductos from './ListaProductos';
import LoadingProductos from './loading';

export default function ProductosPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Catálogo de Productos</h1>
      <p className="text-gray-600">Aquí se listarán los productos obtenidos de la API.</p>
    </div>
  );
}
