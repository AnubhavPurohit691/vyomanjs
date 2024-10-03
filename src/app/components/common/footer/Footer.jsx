import React from 'react';

const Footer = () => {
  return (
    <div className="mt-20 md:mt-0 w-[100%] bg-black p-8 sm:w-full md:w-[100%]  lg:w-[100%] xl:mt-10 xl:w-full ">
      <div className="flex flex-col md:flex-row items-start justify-between lg:flex-row lg:items-start">
        {/* Navigation Links */}
        <div className="flex flex-col gap-4 text-left md:flex-row lg:flex-row lg:gap-8 lg:pl-10 lg:text-left">
          <h1 className="cursor-pointer text-white">Home</h1>
          <h1 className="cursor-pointer text-white">About</h1>
          <h1 className="cursor-pointer text-white">Team</h1>
          <h1 className="cursor-pointer text-white">Login</h1>
          <h1 className="cursor-pointer text-white">Projects</h1>
        </div>

        {/* Copyright Text */}
        <div className="mt-6 pr-10 md:mt-0 md:pr-4 font-bold text-center lg:mt-0 lg:text-right">
          <h1 className="text-white">Vyoman all rights reserved</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
