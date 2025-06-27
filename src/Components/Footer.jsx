import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        
        <motion.div
          className="text-2xl font-bold text-black flex items-center gap-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <i className="ri-ancient-gate-line"></i>
          Travel's Xp
        </motion.div>

       
        <motion.div
          className="flex flex-wrap gap-6 text-sm md:text-base text-black"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="#about" className="hover:text-zinc-700">About</a>
          <a href="#places" className="hover:text-zinc-700">Places</a>
          <a href="#adventure" className="hover:text-zinc-700">Adventure</a>
          <a href="#contact" className="hover:text-zinc-700">Contact</a>
        </motion.div>

       
        <motion.div
          className="flex gap-4 text-xl text-black"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700"><FaYoutube /></a>
        </motion.div>
      </div>

    
      <motion.div
        className="text-center text-sm text-black mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Travel's Xp. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
