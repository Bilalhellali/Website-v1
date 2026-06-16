function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#1B4F72] border-t-[#F39C12] rounded-full animate-spin"></div>
        <p className="text-gray-500 text-sm">Chargement...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
