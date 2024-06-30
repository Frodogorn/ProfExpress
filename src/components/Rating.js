import React from 'react';
import { Star } from 'lucide-react';

const RatingStar = ({ filled, half }) => (
  <Star 
    className={`w-4 h-4 ${
      filled ? 'text-yellow-400' : half ? 'text-yellow-400 half-star' : 'text-gray-300'
    }`}
  />
);

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <RatingStar 
          key={star} 
          filled={star <= fullStars}
          half={star === fullStars + 1 && hasHalfStar}
        />
      ))}
      <span className="ml-1 text-sm font-semibold">{rating.toFixed(2)}</span>
    </div>
  );
};

export default Rating;