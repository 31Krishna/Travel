import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine, RiAncientGateLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full bg-yellow-400 fixed top-0 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">


        <motion.div
          className="text-black font-bold text-3xl flex items-center hover:text-zinc-700 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <RiAncientGateLine className="mr-2" />
          Travel's Xp
        </motion.div>

        <nav className="hidden md:flex gap-6 text-lg font-semibold">
          {['About', 'Places', 'Adventure', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              className="text-black hover:text-zinc-700"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <div className="md:hidden text-2xl text-black cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </div>
      </div>

   
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-yellow-300 px-6 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-4 text-lg font-semibold">
              {['About', 'Places', 'Adventure', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className="text-black hover:text-zinc-700"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
