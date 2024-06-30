import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Calendar, Star } from 'lucide-react';

const ProfessorSearch = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    search: '',
    subject: '',
    minPrice: '',
    maxPrice: '',
    maxDistance: '',
    availability: '',
    rating: ''
  });
  const [loading, setLoading] = useState(false);

  const subjects = ['Maths', 'Physique', 'Littérature', 'Histoire'];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = async () => {
    setLoading(true);
    await onSearch(filters);
    setLoading(false);
  };

  return (
    <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">Rechercher un professeur</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div className="flex items-center bg-white bg-opacity-50 rounded-md">
          <Search className="w-5 h-5 ml-3 text-gray-500" />
          <input
            type="text"
            name="search"
            placeholder="Nom ou matière"
            className="w-full p-2 bg-transparent border-none focus:outline-none text-gray-800"
            value={filters.search}
            onChange={handleFilterChange}
          />
        </div>

        <select
          name="subject"
          className="p-2 rounded-md bg-white bg-opacity-50 text-gray-800"
          value={filters.subject}
          onChange={handleFilterChange}
        >
          <option value="">Toutes les matières</option>
          {subjects.map(subject => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>

        <div className="flex space-x-2">
          <div className="flex items-center bg-white bg-opacity-50 rounded-md flex-1">
            <DollarSign className="w-5 h-5 ml-3 text-gray-500" />
            <input
              type="number"
              name="minPrice"
              placeholder="Prix min"
              className="w-full p-2 bg-transparent border-none focus:outline-none text-gray-800"
              value={filters.minPrice}
              onChange={handleFilterChange}
            />
          </div>
          <div className="flex items-center bg-white bg-opacity-50 rounded-md flex-1">
            <DollarSign className="w-5 h-5 ml-3 text-gray-500" />
            <input
              type="number"
              name="maxPrice"
              placeholder="Prix max"
              className="w-full p-2 bg-transparent border-none focus:outline-none text-gray-800"
              value={filters.maxPrice}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        <div className="flex items-center bg-white bg-opacity-50 rounded-md">
          <MapPin className="w-5 h-5 ml-3 text-gray-500" />
          <input
            type="number"
            name="maxDistance"
            placeholder="Distance max (km)"
            className="w-full p-2 bg-transparent border-none focus:outline-none text-gray-800"
            value={filters.maxDistance}
            onChange={handleFilterChange}
          />
        </div>

        <div className="flex items-center bg-white bg-opacity-50 rounded-md">
          <Calendar className="w-5 h-5 ml-3 text-gray-500" />
          <select
            name="availability"
            className="w-full p-2 bg-transparent border-none focus:outline-none text-gray-800"
            value={filters.availability}
            onChange={handleFilterChange}
          >
            <option value="">Toutes disponibilités</option>
            <option value="weekday">Semaine</option>
            <option value="weekend">Weekend</option>
            <option value="evening">Soir</option>
          </select>
        </div>

        <div className="flex items-center bg-white bg-opacity-50 rounded-md">
          <Star className="w-5 h-5 ml-3 text-gray-500" />
          <select
            name="rating"
            className="w-full p-2 bg-transparent border-none focus:outline-none text-gray-800"
            value={filters.rating}
            onChange={handleFilterChange}
          >
            <option value="">Toutes notes</option>
            <option value="4">4+ étoiles</option>
            <option value="4.5">4.5+ étoiles</option>
          </select>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        <button
          onClick={handleSearch}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          disabled={loading}
        >
          {loading ? 'Recherche...' : 'Rechercher'}
        </button>
      </div>
    </div>
  );
};

export default ProfessorSearch;