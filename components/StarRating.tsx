import React, { useState } from 'react';
import { StarIcon } from './icons';

const StarRating: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex justify-center space-x-2">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          // FIX: Moved mouse event handlers to the parent label element as StarIcon does not accept them.
          <label
            key={index}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
          >
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              className="hidden"
            />
            <StarIcon
              className={`w-8 h-8 cursor-pointer transition-colors duration-200 ${
                ratingValue <= (hover || rating) ? 'text-yellow-400' : 'text-moonlight-silver/30'
              }`}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
