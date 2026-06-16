import { Star } from 'lucide-react'

function StarRating({ rating, max = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'fill-[#F39C12] text-[#F39C12]' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}

export default StarRating
