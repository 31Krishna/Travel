import React from 'react';

const AdventureCard = ({ image, title, description }) => {
  
  if (!image || !title || !description) return null;

  const searchQuery = encodeURIComponent(title);

  return (
    <a
      href={`https://www.google.com/search?q=${searchQuery}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-zinc-800">{title}</h2>
        <p className="text-sm text-zinc-600">{description}</p>
      </div>
    </a>
  );
};

export default AdventureCard;
