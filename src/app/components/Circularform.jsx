import React from 'react';
import Image from 'next/image';
import arrow from '../assets/svg/whitearrow.svg';

const CircleForm = () => {
  return (
    <div className="flex items-center md:ml-4 md:pt-12 2xl:pt-0 justify-center lg:justify-end xl:justify-center pt-0 md:mr-10 lg:mr-32 xl:ml-[750px]  xl:h-screen">
      {/* Circle container */}
      <div className="relative md:ml-3 flex h-96 w-96   items-center justify-center rounded-full bg-white shadow-2xl md:h-96 md:w-96 lg:h-96 lg:w-96">
        {/* Form inside the circle */}
        <form className="flex  w-3/4 flex-col space-y-2">
          <div>
            <label className="block text-sm font-medium text-black"></label>
            <input
              type="text"
              className="mt-1  rounded-md w-11/12 border-b-[1px] border-gray-300 px-4 py-2 text-black placeholder-black shadow-sm focus:border-black focus:ring-black md:ml-4 md:w-10/12 lg:w-full"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700"></label>
            <input
              type="email"
              className="mt-1 rounded-md w-11/12 border-b-[1px] border-gray-300 px-4 py-2 placeholder-black shadow-sm focus:ring-black md:ml-4 md:w-10/12 lg:w-full"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700"></label>
            <input
              type="text"
              className="mt-1  rounded-md w-11/12 border-b-[1px] border-gray-300 px-4 py-2 placeholder-black shadow-sm focus:border-black focus:ring-black md:ml-4 md:w-10/12 lg:w-full"
              placeholder="Subject"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700"></label>
            <textarea
              className="mt-1  rounded-md w-11/12 border-b-[1px] border-gray-300 px-4 py-2 placeholder-black shadow-sm focus:border-black focus:ring-black md:ml-4"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="absolute left-[75%]  top-[80%] md:top-[80%] md:left-[75%] rounded-full bg-black  p-3  text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 h-12 w-12"
            >
              <Image src={arrow} alt="image" height={40} width={40} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CircleForm;
