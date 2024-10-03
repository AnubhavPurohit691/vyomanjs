import React from 'react';
import { HemisphereLight } from 'three';
import Hemispherewithmolecules from '../../Hemispherewithmolecules';
import Subtract from '../../../assets/svg/Subtract.svg';
import Image from 'next/image';
const Headerimage = () => {
  return (
    <div>
      <div className="absolute z-30 h-10 hidden md:block">
        <Image src={Subtract} alt="image" width={4000} />
      </div>
    </div>
  );
};

export default Headerimage;
