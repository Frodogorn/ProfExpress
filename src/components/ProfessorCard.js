import React from 'react';
import { Star, MapPin, Euro } from 'lucide-react';

const ProfessorCard = ({ professor, onClick }) => {
  // Assurez-vous que averageRating est un nombre
  const rating = typeof professor.averageRating === 'number' 
    ? professor.averageRating 
    : parseFloat(professor.averageRating);

  return (
    <div 
      className="bg-purple-600 p-6 rounded-lg text-center hover:bg-purple-700 transition cursor-pointer shadow-lg"
      onClick={() => onClick(professor)}
    >
      <div className="mb-4 flex justify-center">
        <img 
          src={professor.image || `https://robohash.org/${professor.name}`} 
          alt={`Avatar de ${professor.name}`}
          className="w-24 h-24 rounded-full border-4 border-yellow-300"
        />
      </div>
      <h3 className="text-2xl font-bold mb-2 text-white">{professor.name}</h3>
      <p className="text-yellow-300 mb-2">{professor.subject}</p>
      <div className="flex items-center justify-center mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= Math.floor(rating)
                ? 'text-yellow-400 fill-current'
                : 'text-gray-400'
            }`}
          />
        ))}
        <span className="ml-2 text-white">{!isNaN(rating) ? rating.toFixed(2) : 'N/A'}</span>
      </div>
      {professor.distance && (
        <div className="flex items-center justify-center text-white mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{professor.distance} km</span>
        </div>
      )}
      <div className="flex items-center justify-center text-white bg-purple-500 rounded-full py-2 px-4 mt-2">
        <Euro className="w-4 h-4 mr-1" />
        <span>{professor.price}€/heure</span>
      </div>
    </div>
  );
};

export default ProfessorCard;