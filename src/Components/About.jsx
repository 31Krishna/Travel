import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div id='about' className='min-h-screen w-full bg-zinc-600 overflow-x-hidden'>
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 py-10'>
        
 
        <motion.h2
          className='font-bold text-4xl text-center text-white mb-10'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>

        <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
          
     
          <motion.div
            className='lg:w-1/2 text-white'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl font-extrabold mb-4'>Explore. Dream. Discover.</h2>
            <p className='font-medium leading-relaxed'>
              At <strong>Travel's Xp</strong>, we believe that traveling is more than just going from one place to another—it's about experiencing the world in all its beauty, culture, and diversity.
              <br /><br />
              Whether you're a solo traveler seeking adventure, a couple looking for a romantic escape, or a family planning a relaxing holiday, we design trips that suit every passion and purpose.
              <br /><br />
              From snow-capped mountains to sun-kissed beaches, bustling cities to quiet countryside, we cover destinations that inspire awe and curiosity.
              Our carefully crafted itineraries include comfortable stays, local guides, authentic cuisine, and off-the-beaten-path experiences to make every journey truly unique.
              <br /><br />
              With a dedicated team of travel experts, we handle everything—from planning and booking to support during your trip—so you can travel with peace of mind.
              Our goal is simple: to turn your travel dreams into memories you'll cherish forever.
              <br /><br />
              So pack your bags, leave the stress behind, and get ready to discover the world—<strong>the Travel's Xp way</strong>.
            </p>
          </motion.div>

 
          <motion.div
            className='lg:w-1/2'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1170&q=80"
              alt="Travel planning map"
              className='w-full h-auto max-w-full object-cover rounded-xl shadow-lg'
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
