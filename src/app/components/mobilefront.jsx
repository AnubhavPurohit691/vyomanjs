"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loadingcube from './Loadingcube';
import Molecule1 from './Hemispherewithmolecules/Molecule1';
import Molecule2 from './Hemispherewithmolecules/Molecule2';
import Molecule3 from './Hemispherewithmolecules/Molecule3';
import Molecule5 from './Hemispherewithmolecules/Molecule5';
import CompressedMolecule from './Hemispherewithmolecules/Molecule4';
import Image from 'next/image';
import image1 from "../assets/svg/particledescription/2.svg"
import image2 from "../assets/svg/particledescription/3.svg"
import image3 from "../assets/svg/particledescription/4.svg"
import image4 from "../assets/svg/particledescription/5.svg"
import image5 from "../assets/svg/particledescription/2.svg"
import scroll from "../assets/svg/scrolldownindicator.svg"

const molecules = [
  <Molecule1 key="molecule1" />,
  <Molecule2 key="molecule2" />,
  <Molecule3 key="molecule3" />,
  <CompressedMolecule key="compressedMolecule" />,
  <Molecule5 key="molecule5" />,
];
const description = [
  <Image src={image1} alt='image' key={"image1"}/>,
  <Image src={image2} alt='image' key={"image2"}/>,
  <Image src={image3} alt='image' key={"image3"}/>,
  <Image src={image4} alt='image' key={"image4"}/>,
  <Image src={image5} alt='image' key={"image5"}/>,
]

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
      <div className="flex z-30 items-center  justify-center sm:ml-20 md:ml-40 absolute text-center top-0 flex-col h-screen text-xl">
        <AnimatePresence>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className='ml-32 justify-center' key={activeIndex}>

            {molecules[activeIndex]}
            </div>
            <div className='justify-center px-4' key={activeIndex}>

            {description[activeIndex]}
            </div>
          </motion.div>
          <div className='h-10 w-10 mt-4'>

          <Image src={scroll} alt='image'/>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Mobilefront;
