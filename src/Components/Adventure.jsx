import React from 'react';
import { motion } from 'framer-motion';
import AdventureCard from './AdventureCard';

const adventureData = [
  {
    title: "Jungle Safari 🌳",
    image: "https://plus.unsplash.com/premium_photo-1687996298433-414a2d7b1acc?q=80&w=1332&auto=format&fit=crop",
    description: "Experience the wild like never before.",
  },
  {
    title: "Mountain Trekking 🥾",
    image: "https://plus.unsplash.com/premium_photo-1661810803959-f91f5195138e?q=80&w=1170&auto=format&fit=crop",
    description: "Climb heights and conquer nature.",
  },
  {
    title: "Waterfalls 💦",
    image: "https://images.unsplash.com/photo-1700743284636-e312219d9d5f?q=80&w=1108&auto=format&fit=crop",
    description: "Witness nature’s majestic beauty.",
  },
  {
    title: "Snow Adventure ❄️",
    image: "https://images.unsplash.com/photo-1642001116191-2a10a7b58e4f?q=80&w=1074&auto=format&fit=crop",
    description: "Embrace the chill and thrill.",
  },
];

const CardGrid = () => {
  const validData = adventureData.filter(
    (item) => item.title && item.image && item.description
  );

  return (
    <div id="adventure" className="w-full bg-zinc-600 px-4 py-10">

      <motion.h2
        className="text-3xl font-extrabold text-white text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Adventure Awaits 🌄
      </motion.h2>


      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
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
        {validData.map((item, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <AdventureCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CardGrid;
