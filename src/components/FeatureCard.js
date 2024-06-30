import React from 'react';

const FeatureCard = ({ icon, title }) => {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center hover:bg-opacity-20 transition flex flex-col items-center justify-center">
      {icon}
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
    </div>
  );
};

export default FeatureCard;