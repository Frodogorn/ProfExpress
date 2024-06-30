// src/data/professors.js

export const professors = [
  { 
    id: 1,
    name: "Dr. Marie Dupont", 
    subject: "Mathématiques", 
    image: "/api/placeholder/150/150",
    bio: "Docteur en mathématiques avec 15 ans d'expérience dans l'enseignement. Passionnée par la transmission du savoir et l'accompagnement des étudiants vers la réussite.",
    specialties: ["Algèbre", "Analyse", "Probabilités", "Préparation aux concours"],
    reviews: [
      { rating: 5, author: "Léa M.", comment: "Dr. Dupont a une façon incroyable d'expliquer les concepts complexes. Grâce à elle, j'ai réussi mon examen d'analyse avec mention !" },
      { rating: 5, author: "Thomas R.", comment: "Excellente pédagogue. Elle adapte son enseignement à chaque élève. Je recommande vivement." },
      { rating: 4, author: "Sophie L.", comment: "Très bonne professeure, patiente et méthodique. M'a beaucoup aidé pour mes révisions de probabilités." }
    ],
    averageRating: 4.67,
    price: 50, // prix par heure
    availability: "weekday",
    location: { lat: 48.8566, lon: 2.3522 } // Paris
  },
  { 
    id: 2,
    name: "Prof. Jean Martin", 
    subject: "Physique", 
    image: "/api/placeholder/150/150",
    bio: "Professeur agrégé de physique, Jean excelle dans la vulgarisation des concepts complexes. Son approche pratique rend la physique accessible à tous les niveaux.",
    specialties: ["Mécanique quantique", "Thermodynamique", "Électromagnétisme", "Physique expérimentale"],
    reviews: [
      { rating: 5, author: "Maxime D.", comment: "Le Prof. Martin a une approche très pratique qui m'a permis de mieux comprendre la thermodynamique. Ses explications sont claires et précises." },
      { rating: 4, author: "Chloé F.", comment: "Très bon professeur, passionné par son sujet. Parfois un peu rapide, mais toujours prêt à réexpliquer si nécessaire." },
      { rating: 4, author: "Hugo B.", comment: "Grâce à ses cours, j'ai enfin compris l'électromagnétisme. Je le recommande !" }
    ],
    averageRating: 4.33,
    price: 45,
    availability: "evening",
    location: { lat: 45.7640, lon: 4.8357 } // Lyon
  },
  { 
    id: 3,
    name: "Mme. Sophie Leclerc", 
    subject: "Littérature", 
    image: "/api/placeholder/150/150",
    bio: "Ancienne éditrice reconvertie dans l'enseignement, Sophie transmet sa passion pour la littérature avec enthousiasme. Elle aide les étudiants à développer leur esprit critique et leur créativité.",
    specialties: ["Littérature française", "Littérature comparée", "Analyse textuelle", "Techniques d'écriture"],
    reviews: [
      { rating: 5, author: "Emma L.", comment: "Mme Leclerc a ravivé ma passion pour la littérature. Ses cours sont passionnants et ses analyses toujours pertinentes." },
      { rating: 5, author: "Antoine P.", comment: "Excellente professeure qui sait transmettre sa passion. Grâce à elle, j'ai considérablement amélioré mes techniques d'analyse." },
      { rating: 4, author: "Camille D.", comment: "Très bonne pédagogue, toujours à l'écoute. Ses conseils m'ont beaucoup aidé pour mes dissertations." }
    ],
    averageRating: 4.67,
    price: 40,
    availability: "weekend",
    location: { lat: 43.2965, lon: 5.3698 } // Marseille
  },
  { 
    id: 4,
    name: "M. Pierre Dubois", 
    subject: "Histoire", 
    image: "/api/placeholder/150/150",
    bio: "Historien de formation, Pierre rend l'histoire vivante à travers ses cours. Il encourage ses élèves à établir des liens entre le passé et le présent pour mieux comprendre notre monde.",
    specialties: ["Histoire contemporaine", "Géopolitique", "Méthodologie de la dissertation", "Préparation au bac"],
    reviews: [
      { rating: 5, author: "Lucas M.", comment: "M. Dubois a une façon captivante de raconter l'histoire. Ses cours sont toujours intéressants et riches en anecdotes." },
      { rating: 4, author: "Inès K.", comment: "Très bon professeur, qui sait rendre l'histoire accessible. Ses méthodes m'ont beaucoup aidé pour structurer mes dissertations." },
      { rating: 4, author: "Théo B.", comment: "Grâce à M. Dubois, j'ai enfin compris les enjeux de la géopolitique actuelle. Ses cours sont passionnants !" }
    ],
    averageRating: 4.33,
    price: 35,
    availability: "weekday",
    location: { lat: 47.2184, lon: -1.5536 } // Nantes
  }
];