import React from 'react';
import CircleForm from './Circularform';
import Fullsphere from './Contactusrotatingsphere';
import FullScreenCube from './Hemispherewithmolecules/Hemisphere';
import FooterCube from './Footercube';
import Loadingcube from './Loadingcube';
import ContactForm from './Contactusform';

const Contactus = () => {
  return (
    <div className="relative md:h-[600px]">
      <div className='flex flex-col text-center pb-20 md:pb-0 gap-5 '>

      <div className='text-xl font-bold  xl:pt-0 md:mb-0 lg:hidden'>CONTACT US</div>
      <div className='text-sm lg:hidden'>WS209, Central Workshop, IIT Delhi.</div>
      <div className='text-sm lg:hidden'>vyomaniitd@gmail.com</div>
      </div>
      <div className='md:hidden'>
      <ContactForm/>
      </div>

      <CircleForm />
      <div className='absolute top-1 -z-20 h-[80vh] hidden md:block '>
        <Loadingcube/>
      </div>
      <div className="absolute hidden -z-20 pt-40 mb-10  pl-52 w-screen md:right-40 md:top-6 lg:right-80 lg:top-0 2xl:right-56">
        {/* <Fullsphere /> */}
        <FooterCube/>
      </div>
      
      <div className="absolute  lg:left-32 lg:bottom-6 xl:left-80 xl:top-72  top-32 left-20 md:flex flex-col items-center space-y-10 2xl:top-[22rem] 2xl:left-96">
      <div className="font-bold hidden lg:block   hover:underline text-center md:text-4xl lg:text-3xl">
      CONTACT US
  </div>
  <div className="rounded-full hidden lg:block  bg-white  text-center hover:underline lg:text-xl p-4 ">
    WS209, Central Workshop, IIT Delhi.
  </div>
  <div className="rounded-full text-center hidden lg:block  bg-white hover:underline  lg:p-4 lg:pt-0 lg:text-xl">
    vyomaniitd@gmail.com
  </div>
</div>

     
    </div>
  );
};

export default Contactus;
