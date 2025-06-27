import React from 'react';
import { motion } from 'framer-motion';
import TravelCard from '../Components/Travel';

const Place = [
  {
    title: "Paris",
    location: "France 🇫🇷",
    image: "https://images.unsplash.com/photo-1736117024377-e747f2230882?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Explore the city of lights and romance.",
  },
  {
    title: "Tokyo",
    location: "Japan",
    image: "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=1170&auto=format&fit=crop",
    description: "Discover tradition and technology combined.",
  },
  {
    title: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1672128558131-72f3224571de?q=80&w=1333&auto=format&fit=crop",
    description: "Relax on the stunning beaches of Bali.",
  },
  {
    title: "Los Santos",
    location: "USA",
    image: "https://images.unsplash.com/photo-1570639366624-b9d977931bb4?q=80&w=1074&auto=format&fit=crop",
    description: "Relax on the stunning scenes of Los Santos.",
  },
  {
    title: "Auckland",
    location: "New Zealand",
    image: "https://plus.unsplash.com/premium_photo-1697730241416-6eb006b6fe6d?q=80&w=1332&auto=format&fit=crop",
    description: "Relax on the beaches of Auckland.",
  },
  {
    title: "Bern",
    location: "Switzerland",
    image: "https://plus.unsplash.com/premium_photo-1668150898421-d857412ca923?q=80&w=1171&auto=format&fit=crop",
    description: "Relax on the mountains of Bern.",
  },
];

const PlacePage = () => {
  return (
    <div id="places" className="min-h-screen bg-zinc-600 p-6">
      
      
      <motion.h1
        className="text-4xl font-bold text-center text-white mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore Destinations ✈️
      </motion.h1>

      
      <motion.div
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {Place.map((place, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <TravelCard {...place} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PlacePage;
