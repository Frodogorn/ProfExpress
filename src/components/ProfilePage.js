import React, { useState, useCallback } from 'react';
import { MessageCircle, Settings, FileText, Calendar, BookOpen, CreditCard } from 'lucide-react';
import CourseForm from './CourseForm';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("annonces");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courses, setCourses] = useState([]);

  const tabs = [
    { id: "annonces", label: "Annonces", icon: FileText },
    { id: "messages", label: "Messages", icon: MessageCircle },
    { id: "parametres", label: "Paramètres", icon: Settings },
    { id: "calendrier", label: "Calendrier", icon: Calendar },
    { id: "cours", label: "Cours", icon: BookOpen },
    { id: "paiements", label: "Paiements", icon: CreditCard },
  ];

  const handleSubmit = useCallback((newCourse) => {
    const courseWithId = { ...newCourse, id: Date.now().toString() };
    setCourses(prevCourses => [...prevCourses, courseWithId]);
    setIsModalOpen(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const renderCourseList = () => (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map((course) => (
        <div key={course.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-purple-900">{course.title}</h3>
          <p className="text-purple-700 mb-2">Niveau: {course.level} | Prix: {course.price}€/h</p>
          <p className="text-purple-700 mb-2">Matière: {course.subject}</p>
          <p className="text-purple-700 mb-2">Distance max: {course.maxDistance} km</p>
          <p className="text-purple-700 mb-2">Disponibilités: {course.availability}</p>
          <p className="text-purple-700 mb-4">Cours en ligne: {course.onlineOption ? 'Oui' : 'Non'}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-purple-600 font-medium">0 élèves intéressés</span>
            <button className="text-purple-600 hover:text-purple-800 font-medium">Modifier</button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "annonces":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-purple-900">Mes Annonces</h2>
            <p className="mb-6 text-purple-700">Gérez vos annonces de cours particuliers</p>
            <button 
              onClick={handleOpenModal}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              Créer une nouvelle annonce
            </button>
            {renderCourseList()}
          </div>
        );
      case "messages":
        return <h2 className="text-2xl font-bold text-purple-900">Messages</h2>;
      case "parametres":
        return <h2 className="text-2xl font-bold text-purple-900">Paramètres</h2>;
      case "calendrier":
        return <h2 className="text-2xl font-bold text-purple-900">Calendrier</h2>;
      case "cours":
        return <h2 className="text-2xl font-bold text-purple-900">Cours</h2>;
      case "paiements":
        return <h2 className="text-2xl font-bold text-purple-900">Paiements</h2>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-purple-700 text-white p-8">
      <div className="bg-white text-purple-900 rounded-lg shadow-xl overflow-hidden">
        <div className="flex flex-wrap border-b border-purple-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center py-4 px-6 text-sm font-medium transition duration-300 ${
                activeTab === tab.id
                  ? "bg-purple-100 text-purple-700 border-b-2 border-purple-700"
                  : "text-purple-600 hover:text-purple-800 hover:bg-purple-50"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="mr-2 h-5 w-5" />
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
      {isModalOpen && (
        <CourseForm
          onSubmit={handleSubmit}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ProfilePage;