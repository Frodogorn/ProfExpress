import React, { useReducer } from 'react';
import { X } from 'lucide-react';

const initialFormState = {
  title: '',
  subject: '',
  level: '',
  price: '',
  maxDistance: '',
  description: '',
  availability: '',
  onlineOption: false,
};

function formReducer(state, action) {
  switch (action.type) {
    case 'field':
      return {
        ...state,
        [action.fieldName]: action.payload
      };
    case 'reset':
      return initialFormState;
    default:
      return state;
  }
}

const CourseForm = ({ onSubmit, onClose }) => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch({
      type: 'field',
      fieldName: name,
      payload: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    dispatch({ type: 'reset' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 bg-purple-100">
          <h2 className="text-2xl font-bold text-purple-900">Créer une nouvelle annonce</h2>
          <button onClick={onClose} className="text-purple-600 hover:text-purple-800 transition-colors">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Titre du cours*</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formState.title}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 text-gray-900"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Matière*</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 text-gray-900"
              required
            />
          </div>
          <div>
            <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">Niveau*</label>
            <select
              id="level"
              name="level"
              value={formState.level}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 text-gray-900"
              required
            >
              <option value="">Sélectionnez un niveau</option>
              <option value="primaire">Primaire</option>
              <option value="college">Collège</option>
              <option value="lycee">Lycée</option>
              <option value="superieur">Enseignement supérieur</option>
            </select>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Prix (€/h)*</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formState.price}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 text-gray-900"
              required
            />
          </div>
          <div>
            <label htmlFor="maxDistance" className="block text-sm font-medium text-gray-700 mb-1">Distance maximale de déplacement (km)</label>
            <input
              type="number"
              id="maxDistance"
              name="maxDistance"
              value={formState.maxDistance}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description du cours*</label>
            <textarea
              id="description"
              name="description"
              value={formState.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 text-gray-900"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">Disponibilités</label>
            <input
              type="text"
              id="availability"
              name="availability"
              value={formState.availability}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 text-gray-900"
              placeholder="Ex: Lundi-Vendredi, 18h-21h"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="onlineOption"
              name="onlineOption"
              checked={formState.onlineOption}
              onChange={handleChange}
              className="rounded border-purple-300 text-purple-600 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 mr-2"
            />
            <label htmlFor="onlineOption" className="text-sm text-gray-700">Proposer des cours en ligne</label>
          </div>
          <button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          >
            Créer l'annonce
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;