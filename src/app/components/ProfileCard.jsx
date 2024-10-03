'use client';
import React, { useState } from 'react';
import img1 from '../assets/svg/profilecard/2.svg';
import img2 from '../assets/svg/profilecard/3.svg';
import img3 from '../assets/svg/profilecard/4.svg';
import img4 from '../assets/svg/profilecard/5.svg';
import img5 from '../assets/svg/profilecard/6.svg';
import img6 from '../assets/svg/profilecard/7.svg';
import whitearrow from '../assets/svg/whitearrow.svg';
import Image from 'next/image';
import imagelink from '../assets/svg/link image.svg';

const Profilecarddata = [
  {
    name: 'Seshan Sriranga',
    position: 'Associate Professor',
    link: 'https://www.linkedin.com/in/seshan-srirangarajan-bbb6493/',
    src: img1,
  },
  {
    name: 'Jay Dhariwal',
    position: 'Associate Professor',
    link: 'https://www.linkedin.com/in/jaydhariwal/',
    src: img2,
  },
  {
    name: 'GULSHAN KUMAR',
    position: ' Senior Research Scholar',
    link: 'https://www.linkedin.com/in/gulshan-kumar-436642156/',
    src: img3,
  },
  {
    name: 'Prasannaa Kumar',
    position: 'Project Scientist',
    link: 'https://www.linkedin.com/in/prasannaa-kumar-d-9ab2a1202/',
    src: img4,
  },
  {
    name: 'bavath   ',
    position: 'Project Scientist',
    link: 'https://www.linkedin.com/in/bavath-d-9ab0a5163/',
    src: img5,
  },
  {
    name: 'Saran Raj',
    position: 'Project Assistant',
    link: '#',
    src: img6,
  },
];

const ProfileCard = ({ name, position, link, src }) => {
  return (
    <div className="flex h-64 mb-0 flex-col justify-between border-[1px] border-gray-200 md:h-80 lg:h-72 xl:h-[400px]">
      {/* Name and Position */}
      <div className="flex justify-around gap-8 border-b-2 border-gray-200 p-4 pr-0 pl-0 sm:gap-3 sm:pl-5 md:gap-8 md:pl-6 lg:justify-around lg:gap-4 lg:pl-4 xl:gap-8 2xl:gap-20 2xl:pl-12">
        <h2 className="text-xs pl-2 md:pl-0 font-bold lg:text-sm xl:text-base xl:w-20">
          {name.toUpperCase()}
        </h2>
        <p className="ml-4 text-xs text-gray-500 sm:ml-0 lg:text-sm xl:text-base">
          {position.toUpperCase()}
        </p>
        <div className="pr-10">
          <a
            href={link}
            className=" flex gap-2 rounded-full border-2 border-gray-400 p-4 py-2 pr-6 text-xs text-black hover:text-gray-700 sm:pr-3 md:px-4 md:py-2 md:pl-2 md:pb-2 lg:mr-4 lg:px-4 lg:py-2 lg:pr-6 lg:text-xs  xl:px-4 xl:py-2 xl:text-sm"
          >
            <Image
              src={imagelink}
              alt="image"
              className="sm:-px-2 mt-[2px] h-3 w-3 sm:h-2 sm:w-2"
            />
            <div className="text-xs">Website</div>
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative mb-8 flex justify-center sm:mb-6 md:mb-7 lg:mb-8 xl:mb-12">
        <Image
          src={src}
          alt="Profile"
          className="h-32 w-32 rounded-full object-cover md:h-40 md:w-40 lg:mt-4 lg:h-40 lg:w-40 xl:h-60 xl:w-60"
        />
        <div className="absolute bottom-1 right-28 flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 sm:bottom-2 sm:right-20 md:bottom-1 md:right-22 2xl:bottom-4 2xl:left-80 md:h-8 md:w-8 lg:bottom-3 lg:right-12 lg:h-12 lg:w-12 xl:bottom-4 xl:right-20 xl:h-12 xl:w-12">
          <div className="">
            <Image src={whitearrow} alt="arrow" className='h-3 w-3'/>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileCardList = () => {
  const [data] = useState(Profilecarddata);

  return (
    <div className="container mx-auto  mt-[3rem] px-4  sm:mt-[10rem] sm:pl-10 sm:pr-10 md:pl-20 md:mt-[12rem] lg:ml-0 lg:mt-20 lg:pl-20 lg:pr-16 xl:mt-40 xl:pl-60 xl:pr-0 2xl:mt-0 2xl:pl-12 2xl:pt-0">
      <div className="mb-5  flex gap-3 md:gap-7">
        <div className="mt-3 h-3 w-3 md:h-6 md:w-6 rounded-full bg-black"></div>
        <div className="text-xl font-light hover:underline md:text-4xl lg:text-3xl xl:pt-1 xl:text-4xl">
          ABOUT US
        </div>
      </div>
      <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 lg:grid-cols-3 2xl:mt-10">
        {data.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            position={profile.position}
            link={profile.link}
            src={profile.src}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileCardList;
