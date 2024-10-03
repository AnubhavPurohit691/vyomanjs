import React from 'react';
import Image from 'next/image';
import vyoman from '../../../assets/svg/vyoman.svg';
import Headerimage from './Headerimage';

const Header = () => {
  return (
    <header className="relative h-12 md:h-0 items-center justify-between md:bg-transparent">
      <div className="flex flex-col">
        <Headerimage />
        <div className="z-30 flex justify-between  pl-4 sm:pl-6 sm:pr-4 lg:pl-10 xl:pr-10">
          <div className="flex-shrink-0 mt-4">
            <Image
              src={vyoman}
              alt="Vyoman Logo"
              className="h-8 w-20 -mt-1  sm:h-12 sm:w-28 lg:h-16 lg:w-28 xl:h-24 xl:w-44"
            />
          </div>
          <div className="flex items-center">
            <button className="rounded-full mt-4  mr-2 bg-black px-3 py-1 pb-[6px] text-xs text-white sm:px-6 sm:py-2 sm:text-base">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
