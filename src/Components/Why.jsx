import React from 'react';
import { motion } from 'framer-motion';

const whyPoints = [
  {
    title: "Experienced Travel Experts",
    description: "With over a decade of field experience, our travel experts are not just guides — they’re passionate adventurers who’ve explored every trail, culture, and corner of the world. Whether it's a hidden beach in Bali or a secret temple in the Himalayas, our team knows how to deliver safe, personalized, and unforgettable journeys.",
    image: "https://images.unsplash.com/photo-1619467416348-6a782839e95f?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Best Price Guarantee",
    description: "We believe that extraordinary experiences shouldn’t break the bank. That’s why we offer the best price guarantee — without compromising on quality or comfort. Our partnerships with local vendors ensure you get premium experiences at the lowest possible rates.",
    image: "https://images.unsplash.com/photo-1669917066237-b41ad6c4ba65?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "24/7 Customer Support",
    description: "Travel can be unpredictable, but our support never sleeps. Whether your flight gets delayed, plans change, or you just need help booking your next stop — our dedicated support team is available around the clock to assist you instantly.",
    image: "https://images.unsplash.com/photo-1657047211843-2d7fa44553b0?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Trusted by Thousands of Travelers",
    description: "Don’t just take our word for it. We’ve helped thousands of travelers explore the world safely and confidently. Our 5-star ratings and glowing reviews reflect our commitment to creating memorable, meaningful, and seamless travel experiences.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
  },
];

const Why = () => {
  return (
    <div className="bg-zinc-600 py-12 px-6">
      
      <motion.h2
        className="text-4xl font-bold text-white text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Adventure Backed by Trust
      </motion.h2>

      <div className="space-y-16 max-w-6xl mx-auto">
        {whyPoints.map((point, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                isReversed ? 'md:flex-row-reverse' : ''
              } gap-8`}
              initial={{ opacity: 0, x: isReversed ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              
              <div className="md:w-1/2 text-white space-y-4">
                <h3 className="text-2xl font-semibold">{point.title}</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  {point.description}
                </p>
              </div>

             
              <motion.div
                className="md:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={point.image}
                  alt={point.title}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Why;
