'use client';
import { useState } from 'react';
import arrow from '../assets/svg/arrow.svg';
import Image from 'next/image';
import photoimage from '../assets/svg/image project..svg';
import photoimage2 from '../assets/svg/accordion/2.svg';
import photoimage3 from '../assets/svg/accordion/3.svg';
import photoimage4 from '../assets/svg/accordion/4.svg';

// Sample data array
const Data = [
  {
    id: 1,
    image: photoimage,
    title: 'Development of PM Monitors',
    description:
      ' Innovating advanced yet affordable monitors to accurately measure particulate matter in various environmental settings.',
  },
  {
    id: 2,
    image: photoimage2,
    title: 'Particulate Matter Sensor Development',
    description:
      ' We engineered sensors to accurately track particulate matter levels in highly polluted regions.',
  },
  {
    id: 3,
    image: photoimage3,
    title: 'Development of Black Carbon Sensor',
    description:
      ' Creating precise sensors for detecting black carbon emissions, crucial for air quality and pollution studies.',
  },
  {
    id: 4,
    image: photoimage4,
    title: 'Development of Ozone Sensor',
    description:
      ' Designing cutting-edge sensors for real-time monitoring of ozone concentrations to improve atmospheric analysis.',
  },
];

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(null); // Control for multiple accordions
  const [comdata] = useState(Data);

  const toggleAccordion = (id) => {
    setIsOpen(isOpen === id ? null : id); // Toggle the current accordion
  };

  return (
    <div className="mt-[42rem] md:mt-[55rem] lg:mt-28 lg:pr-24 w-screen pl-10 md:pl-16 md:pr-16 pr-10 lg:pl-24 xl:mt-52 xl:pl-[12rem] xl:pr-[12rem] 2xl:mt-60 2xl:pr-[15rem] 2xl:pl-72">
      <div className="flex gap-1 p-4 pr-0 pl-0">
        <div className="mt-10 h-3 w-4 md:h-5 md:w-5 xl:mt-9 xl:h-6 xl:w-6 rounded-full bg-black"></div>
        <div className="p-6 md:pb-10 border-b-[1px] border-gray-200 w-full pl-3 pt-7 text-2xl font-light md:text-4xl lg:text-3xl xl:text-4xl">
          PROJECTS
        </div>
      </div>
      {comdata.map((item) => (
        <div key={item.id} className="mb-4 xl:mb-0 pb-8 xl:p-0 border-b-[1px] w-full border-gray-200">
          <button
            className="h-10 lg:h-40 w-full md:p-4 xl:p-0 p-0 text-left text-lg font-medium focus:outline-none"
            onClick={() => toggleAccordion(item.id)}
          >
            <div className="flex justify-between">
              <div className="md:flex md:gap-24">
                <div
                  className={`${
                    isOpen === item.id
                      ? ''
                      : 'hidden md:block h-16 w-16 rounded-full md:h-10 md:w-10 text-center md:p-2 md:pt-2 md:mt-4 bg-black items-center lg:pt-2 lg:pl-3 xl:pt-2 xl:pl-2 text-sm xl:h-12 xl:w-12 text-white md:text-lg lg:text-lg xl:text-2xl'
                  }`}
                >
                  {isOpen === item.id ? '' : item.id}
                </div>
                <h1
                  className={`pt-5 text-base md:text-sm lg:text-lg xl:text-2xl${
                    isOpen === item.id ? 'hidden' : ''
                  }`}
                >
                  <div className="flex gap-6 lg:ml-10 xl:ml-32">
                    <Image
                      src={item.image}
                      alt="image"
                      className={`${
                        isOpen === item.id
                          ? 'hidden'
                          : 'hidden lg:block lg:rounded-full lg:bg-gray-300 lg:-mt-6 lg:h-20 lg:w-20 lg:p-3'
                      }`}
                    />
                    <div className="md:text-xl ml-1 mb-3">
                      {isOpen === item.id ? '' : item.title}
                    </div>
                  </div>
                </h1>
              </div>
              <Image
                src={arrow}
                alt="arrow"
                className={`rotate-180 h-4 w-4 mt-6 ${isOpen === item.id ? 'hidden' : ''}`}
              />
            </div>
          </button>
          {isOpen === item.id && (
            <div className="relative">
              <div className="grid columns-3">
                <div className="w-full pb-3 text-2xl md:text-3xl lg:text-2xl xl:text-2xl">
                  {item.title}
                </div>
                <div className="text-start xl:w-60 xl:ml-[900px] 2xl:w-80 2xl:ml-[1000px]">
                  {item.description}
                </div>
                <div className="h-44 w-44 md:h-64 md:w-64 ml-20 mt-6 flex xl:ml-96 2xl:ml-[30rem] xl:mt-0 xl:mb-10 lg:h-80 lg:w-80 overflow-hidden rounded-full bg-gray-300 p-4">
                  <Image src={item.image} alt="image" className="justify-center items-center" />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
