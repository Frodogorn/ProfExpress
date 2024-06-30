import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Zap, Users, CheckCircle } from 'lucide-react';
import ProfessorCard from './ProfessorCard';
import ProfessorModal from './ProfessorModal';
import FeatureCard from './FeatureCard';
import ProfessorSearch from './ProfessorSearch';

// Simulons une fonction d'API
const fetchProfessors = async (page, filters) => {
  console.log('Fetching professors with filters:', filters);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simule un délai réseau
  
  // Générer 20 professeurs aléatoires pour la démonstration
  const professors = Array(20).fill().map((_, index) => ({
    id: page * 20 + index,
    name: `Prof ${page * 20 + index + 1}`,
    subject: ['Maths', 'Physique', 'Littérature', 'Histoire'][Math.floor(Math.random() * 4)],
    price: Math.floor(Math.random() * 50) + 20,
    distance: Math.floor(Math.random() * 50),
    availability: ['weekday', 'weekend', 'evening'][Math.floor(Math.random() * 3)],
    averageRating: (Math.random() * 2 + 3).toFixed(1),
    image: `https://picsum.photos/seed/${page * 20 + index}/200/200` // Image aléatoire
  }));

  // Filtrer les professeurs en fonction des critères
  return professors.filter(prof => {
    return (
      (!filters.search || prof.name.toLowerCase().includes(filters.search.toLowerCase()) || prof.subject.toLowerCase().includes(filters.search.toLowerCase())) &&
      (!filters.subject || prof.subject === filters.subject) &&
      (!filters.minPrice || prof.price >= parseFloat(filters.minPrice)) &&
      (!filters.maxPrice || prof.price <= parseFloat(filters.maxPrice)) &&
      (!filters.maxDistance || prof.distance <= parseFloat(filters.maxDistance)) &&
      (!filters.availability || prof.availability === filters.availability) &&
      (!filters.rating || parseFloat(prof.averageRating) >= parseFloat(filters.rating))
    );
  });
};

const HomePage = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [professors, setProfessors] = useState([]);
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentFilters, setCurrentFilters] = useState({});

  const features = [
    { icon: <BookOpen className="w-12 h-12" />, title: "Cours sur mesure" },
    { icon: <Zap className="w-12 h-12" />, title: "Apprentissage rapide" },
    { icon: <Users className="w-12 h-12" />, title: "Profs expérimentés" },
    { icon: <CheckCircle className="w-12 h-12" />, title: "Résultats garantis" }
  ];

  const handleStartNow = () => {
    if (isLoggedIn) {
      // Scroll to the search section
      const searchSection = document.getElementById('search-section');
      if (searchSection) {
        searchSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/signup');
    }
  };

  const handleSearch = useCallback(async (filters) => {
    setLoading(true);
    setCurrentFilters(filters);
    const newProfessors = await fetchProfessors(0, filters);
    setProfessors(newProfessors);
    setPage(0);
    setLoading(false);
  }, []);

  const handleLoadMore = useCallback(async () => {
    setLoading(true);
    const nextPage = page + 1;
    const moreProfessors = await fetchProfessors(nextPage, currentFilters);
    setProfessors(prev => [...prev, ...moreProfessors]);
    setPage(nextPage);
    setLoading(false);
  }, [page, currentFilters]);

  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Apprenez avec les meilleurs profs particuliers</h1>
        <p className="text-xl mb-8">Des cours personnalisés pour tous les niveaux et toutes les matières</p>
        <button 
          onClick={handleStartNow}
          className="bg-yellow-400 text-purple-800 font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Commencez maintenant
        </button>
      </section>

      <section id="search-section" className="mb-16">
        <ProfessorSearch onSearch={handleSearch} />
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Nos Professeurs d'Exception</h2>
        {loading && professors.length === 0 ? (
          <div className="text-center text-xl">Chargement des professeurs...</div>
        ) : professors.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {professors.map((prof) => (
                <ProfessorCard 
                  key={prof.id} 
                  professor={prof} 
                  onClick={() => setSelectedProfessor(prof)}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                disabled={loading}
              >
                {loading ? 'Chargement...' : 'Voir plus'}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-xl">Aucun professeur trouvé. Veuillez ajuster vos critères de recherche.</div>
        )}
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} />
        ))}
      </section>

      <section className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Pourquoi choisir ProfsExpress ?</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <CheckCircle className="w-6 h-6 mr-2 text-yellow-300" />
            <span>Des profs qualifiés et passionnés</span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="w-6 h-6 mr-2 text-yellow-300" />
            <span>Flexibilité des horaires et des lieux</span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="w-6 h-6 mr-2 text-yellow-300" />
            <span>Suivi personnalisé de vos progrès</span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="w-6 h-6 mr-2 text-yellow-300" />
            <span>Satisfaction garantie ou remboursé</span>
          </li>
        </ul>
      </section>

      {selectedProfessor && (
        <ProfessorModal 
          professor={selectedProfessor} 
          onClose={() => setSelectedProfessor(null)} 
        />
      )}
    </main>
  );
};

export default HomePage;