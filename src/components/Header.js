import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate('/profile');
    } else {
      navigate('/signup');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="bg-purple-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">ProfsExpress</Link>
        <nav>
          <button 
            onClick={handleProfileClick}
            className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-full hover:bg-yellow-300 transition"
          >
            {isLoggedIn ? 'Profil' : "S'inscrire"}
          </button>
          {isLoggedIn && (
            <button 
              onClick={handleLogout}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
            >
              Déconnexion
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;