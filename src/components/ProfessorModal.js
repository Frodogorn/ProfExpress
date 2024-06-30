import React from 'react';
import { X } from 'lucide-react';
import Rating from './Rating';

const Review = ({ review }) => (
  <div className="mb-3 pb-3 border-b border-gray-200 last:border-b-0">
    <div className="flex items-center mb-1">
      <Rating rating={review.rating} />
      <span className="ml-2 text-sm text-gray-600">{review.author}</span>
    </div>
    <p className="text-sm">{review.comment}</p>
  </div>
);

const ProfessorModal = ({ professor, onClose }) => {
  if (!professor) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white text-purple-800 p-6 rounded-lg max-w-2xl w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>
        <div className="flex flex-col md:flex-row mb-6">
          <img src={professor.image} alt={professor.name} className="w-32 h-32 rounded-full mx-auto md:mx-0 mb-4 md:mb-0 md:mr-6" />
          <div>
            <h2 className="text-2xl font-bold mb-2">{professor.name}</h2>
            <p className="text-xl mb-2">{professor.subject}</p>
            <Rating rating={professor.averageRating} />
            <p className="mt-2 mb-4">{professor.bio}</p>
          </div>
        </div>
        <h3 className="font-bold mb-2">Spécialités:</h3>
        <ul className="list-disc list-inside mb-4">
          {professor.specialties.map((specialty, index) => (
            <li key={index}>{specialty}</li>
          ))}
        </ul>
        <h3 className="font-bold mb-2">Avis des étudiants:</h3>
        <div className="mb-4 max-h-60 overflow-y-auto">
          {professor.reviews.map((review, index) => (
            <Review key={index} review={review} />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <button onClick={onClose} className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition">
            Fermer
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            Réserver un cours
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessorModal;