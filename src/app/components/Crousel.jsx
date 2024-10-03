'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from '../assets/svg/collated/1.svg';
import image2 from '../assets/svg/collated/2.svg';
import image3 from '../assets/svg/collated/3.svg';
import image4 from '../assets/svg/collated/4.svg';

const carouselItems = [
  { id: 1, imageSrc: image1, location: '(Sensor network)' },
  { id: 2, imageSrc: image2, location: '(NITRD, Delhi)' },
  { id: 3, imageSrc: image3, location: '(Jodhpur)' },
  { id: 4, imageSrc: image4, location: '(Gramodaya Parisar, Delhi)' },
];

export default function ResponsiveCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const nextIndex = (activeIndex + 1) % carouselItems.length;

  return (
    
    <div className="mx-auto w-full max-w-xs px-4 -mt-4  sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
      <div className="relative aspect-square flex col-span-3">
        <div className="absolute -top-32 mt-10 inset-0 ml-10 md:ml-4 h-3/4 w-3/4 overflow-hidden rounded-full sm:inset-auto sm:bottom-0 sm:left-0 sm:right-0 sm:top-0">
          <Image
            src={carouselItems[activeIndex].imageSrc}
            alt={`Study at ${carouselItems[activeIndex].location}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute -right-28 top-20 hidden h-1/2 w-1/2 overflow-hidden rounded-full opacity-30 lg:block">
          <Image
            src={carouselItems[nextIndex].imageSrc}
            alt={`Next study at ${carouselItems[nextIndex].location}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute bottom-24 left-10 w-52 py-1 sm:w-60 sm:px-3 sm:py-1 md:bottom-0 md:left-6 md:w-80 lg:-left-40 lg:bottom-[5.2rem] lg:w-96 lg:border-b-[1px]
        xl:bottom-[5.5rem] xl:-left-60 xl:w-[30rem] lg:border-black 2xl:-left-96 2xl:bottom-32 2xl:w-[40rem] 2xl:border-b-2 2xl:border-gray-400">
          <p className="text-center text-base font-semibold sm:text-sm md:text-xl lg:text-start lg:text-xl xl:text-2xl">
            {carouselItems[activeIndex].location}
          </p>
        </div>
        <div className="absolute bottom-16 right-32 md:-bottom-11 md:left-[160px] flex space-x-1 lg:bottom-20 lg:left-48 xl:left-[70%]   xl:bottom-24 ">
          {carouselItems.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 ${
                index === activeIndex ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
