export default function LoadingProductos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-gray-200 h-64 rounded-lg"></div>
      ))}
    </div>
  );
}
