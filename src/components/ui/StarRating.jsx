import { Star } from 'lucide-react'

function StarRating({ rating, max = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={16}
          style={i < rating ? { fill: 'var(--dune)', color: 'var(--dune)' } : { color: 'rgba(255,255,255,0.2)' }}
          className=""
        />
  