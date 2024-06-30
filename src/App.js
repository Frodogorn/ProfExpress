import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import SignupForm from './components/SignupForm';
import { professors } from './data/professors';
import { calculateDistance } from './utils/distanceCalculator';

const App = () => {
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const [filteredProfessors, setFilteredProfessors] = useState(professors);
  const [userLocation, setUserLocation] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedInStatus === 'true');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          console.error("Erreur de géolocalisation:", error);
        }
      );
    }
  }, []);

  const handleFilteredProfessors = (filtered) => {
    const profsWithDistance = filtered.map(prof => ({
      ...prof,
      distance: userLocation
        ? calculateDistance(
            userLocation.lat,
            userLocation.lon,
            prof.location.lat,
            prof.location.lon
          )
        : null
    }));
    setFilteredProfessors(profsWithDistance);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        
        <Routes>
          <Route path="/" element={
            <HomePage 
              filteredProfessors={filteredProfessors}
              handleFilteredProfessors={handleFilteredProfessors}
              userLocation={userLocation}
              setSelectedProfessor={setSelectedProfessor}
              selectedProfessor={selectedProfessor}
              isLoggedIn={isLoggedIn}
            />
          } />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;