'use client';

import { useState } from 'react';
import Image from 'next/image';
import React from 'react';
import first from '../assets/svg/1st.svg';
import second from '../assets/svg/2nd.svg';
import third from '../assets/svg/3particle.svg';

// Data
const data = [
  {
    src: first,
    alt: 'image',
    title: 'PARTICULATE MATTER',
    description:
      'Particulate matter (PM) consists of tiny solid particles and liquid droplets suspended in the air, affecting air quality and health.',
    width: 0,
    height: 0,
  },
  {
    src: second,
    alt: 'image',
    title: 'OZONE PARTICLES',
    description: `Ground-level ozone is a harmful secondary pollutant formed when two primary pollutants react in sunlight and stagnant air.`,
    width: 0,
    height: 0,
  },
  {
    src: third,
    alt: 'image',
    title: 'BLACK CARBON',
    description:
      'Black carbon is the black soot produced by burning fossil fuels, such as from diesel engines and coal power plants.',
    width: 0,
    height: 0,
  },
];

// Component for rendering rounded images
const RoundedImageComponent = ({ src, alt }) => {
  return (
    <div className="flex mt-6 justify-center overflow-hidden rounded-full">
      <Image
        src={src}
        alt={alt}
        className="h-36 w-36 object-cover sm:h-44 sm:w-44 md:h-60 md:w-60 lg:h-40 lg:w-40 xl:h-52 xl:w-52 2xl:h-60 2xl:w-60"
      />
    </div>
  );
};

export default function Componentof3particlematter() {
  const [roundedImageComponents] = useState(data);

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto  grid h-80 w-10/12 grid-cols-1 items-center justify-center p-6 xl:pl-20 md:p-4 pt-0  sm:pl-16 md:grid-cols-1  lg:grid-cols-3 lg:pl-2 2xl:mt-5 lg:gap-28">
        {roundedImageComponents.map((imageData, index) => (
          <div
            className="flex  flex-col items-center md:items-center lg:items-start"
            key={index}
          >
            <RoundedImageComponent src={imageData.src} alt={imageData.alt} />
            <div className="text-center lg:text-start w-full">
              <div className="xl:text-md pt-0 mt-4 block text-xl  font-medium md:text-xl xl:mt-6">
                {imageData.title}
              </div>
              <div className="w-full text-base pt-2  md:text-base lg:w-60 lg:text-sm xl:text-base xl:w-80">
                {imageData.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
