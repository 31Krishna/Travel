import React from 'react'

const Travel = ({image,title,location,description}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-fit" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#2B2D42]">{title}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="mt-2 text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default Travel