"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loadingcube from './Loadingcube';
import Molecule1 from './Hemispherewithmolecules/Molecule1';
import Molecule2 from './Hemispherewithmolecules/Molecule2';
import Molecule3 from './Hemispherewithmolecules/Molecule3';
import Molecule5 from './Hemispherewithmolecules/Molecule5';
import CompressedMolecule from './Hemispherewithmolecules/Molecule4';

const molecules = [
  <Molecule1 key="molecule1" />,
  <Molecule2 key="molecule2" />,
  <Molecule3 key="molecule3" />,
  <CompressedMolecule key="compressedMolecule" />,
  <Molecule5 key="molecule5" />,
];

const Mobilefront = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically cycle through the molecules every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % molecules.length);
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-[70%] lg:hidden object-contain relative">
      <Loadingcube />
      
      {/* Animated carousel for molecules */}
      <div className="flex z-30 items-center ml-10 justify-center sm:ml-20 md:ml-40 absolute text-center top-10 flex-col h-screen text-xl">
        <AnimatePresence>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            {molecules[activeIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Mobilefront;
