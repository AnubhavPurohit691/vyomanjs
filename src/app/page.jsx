// app/page.jsx
'use client'; // This ensures that the component is treated as a client-side component

import Accordion from './components/Accordion';
import Companydescription from './components/CompanyDescription';
import Componentof3particlematter from './components/Component3particle';
import Contactus from './components/Contactus';
import ResponsiveCarousel from './components/Crousel';
import Hemispherewithmolecules from './components/Hemispherewithmolecules';
import ProfileCardList from './components/ProfileCard';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Mobilefront from './components/mobilefront';
import { useState } from 'react';
import Loading from './user/upscreen';

export default function Home() {
  const [visible, setVisible] = useState(true);

  const handleOverlayClick = () => {
    setVisible(false);
  };

  const handleTransitionEnd = () => {
    const overlayElement = document.getElementById('overlay');
    if (overlayElement) {
      overlayElement.removeEventListener('transitionend', handleTransitionEnd);
      overlayElement.remove();
    }
  };

  if (visible) {
    return (
      <div
        id="overlay"
        onClick={handleOverlayClick}
        onTransitionEnd={handleTransitionEnd}
      >
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Header />
      <Hemispherewithmolecules />
      <Mobilefront />
      <div className="mt-[20vh] md:mt-40 lg:mt-[93vh]">
        <Companydescription />
        <div className="2xl:ml-6">
          <Componentof3particlematter />
        </div>
      </div>
      <Accordion />
      <div className="flex mt-32 gap-4 ml-10 lg:ml-24 md:gap-4 xl:gap-6 2xl:ml-44 2xl:mt-40 md:ml-16">
        <div className="mt-2 h-3 w-3 md:h-5 md:w-5 xl:mt-3 xl:h-6 xl:w-6 xl:ml-24 rounded-full bg-black"></div>
        <div className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-light xl:pt-1">COLLOCATED STUDIES</div>
      </div>
      <div className="mt-40 md:mt-10 md:ml-20 2xl:mt-20">
        <ResponsiveCarousel />
      </div>
      <div className="2xl:ml-36 2xl:pl-10">
        <ProfileCardList />
      </div>
      <div className="mt-40 xl:mt-0 2xl:mt-10">
        <Contactus />
      </div>
      <Footer />
    </>
  );
}
