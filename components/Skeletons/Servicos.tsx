
export function Servicos() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl mx-auto px-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-3xl animate-pulse"
        >
          {/* Círculo do Ícone */}
          <div className="w-12 h-12 rounded-full bg-gray-200 mb-6" />
          
          {/* Título */}
          <div className="h-5 bg-gray-200 rounded w-3/4 mb-4" />
          
          {/* Descrição (Linha 1) */}
          <div className="h-3 bg-gray-200 rounded w-full mb-2" />
          
          {/* Descrição (Linha 2) */}
          <div className="h-3 bg-gray-200 rounded w-5/6 mb-6" />
          
          {/* Link Read more */}
          <div className="h-3 bg-gray-200 rounded w-1/3 mt-auto" />
        </div>
      ))}
    </div>
  )
}
