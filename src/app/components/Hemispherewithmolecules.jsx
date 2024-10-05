'use client'
import Image from 'next/image';
import Hemisphere from './Hemispherewithmolecules/Hemisphere';

import image3d1 from '../assets/svg/mol5.svg';
import detailimage1 from "../assets/svg/detailsofmolecule1.svg"
import detailimage2 from "../assets/svg/particledescription/2.svg"
import detailimage3 from "../assets/svg/particledescription/3.svg"
import detailimage4 from "../assets/svg/particledescription/4.svg"
import detailimage5 from "../assets/svg/particledescription/5.svg"
import image3d2 from '../assets/svg/moleculesdetail/2.svg';
import image3d3 from '../assets/svg/moleculesdetail/3.svg';
import image3d4 from '../assets/svg/moleculesdetail/4.svg';
import image3d5 from '../assets/svg/moleculesdetail/5.svg';
import { useState } from 'react';
import Molecule1 from './Hemispherewithmolecules/Molecule1';
import Molecule2 from './Hemispherewithmolecules/Molecule2';
import Molecule3 from './Hemispherewithmolecules/Molecule3';
import CompressedMolecule from './Hemispherewithmolecules/Molecule4';
import Molecule5 from './Hemispherewithmolecules/Molecule5';
import line from "../assets/svg/Line 1.svg"
const Hemispherewithmolecules = () => {
 const[description1,setdescription1]=useState(false)
 const[description2,setdescription2]=useState(false)
 const[description3,setdescription3]=useState(false)
 const[description4,setdescription4]=useState(false)
 const[description5,setdescription5]=useState(false)
 function onhandleclick1(){
  setdescription1((prev)=>!prev)
 }
 function onhandleclick2(){
  setdescription2((prev)=>!prev)
 }
 function onhandleclick3(){
  setdescription3((prev)=>!prev)
 }
 function onhandleclick4(){
  setdescription4((prev)=>!prev)
 }
 function onhandleclick5(){
  setdescription5((prev)=>!prev)
 }
  return (
    <div className="relative ">
      <div
        className={`absolute -top-20 hidden   lg:block  bg-gradient-to-b from-gray-300 via-gray-100 to-white  md:h-[100%] md:w-screen lg:h-[100vh] lg:w-full`}
      >
        <Hemisphere />
        {/* <div className=' ml-[700px] absolute top-[83%] left-28 h-40 z-10'>
      <Image src={line} alt='image'/>
      </div> */}
      </div>
      
      <div
        className={`absolute h-20 hidden lg:block w-20 lg:w-full z-20 md:left-[32%] md:top-[20%] lg:left-[0%] xl:left-[0%] lg:top-[370px] xl:top-[500px] 2xl:top-[700px] 2xl:pl-40`} 
      >
        <div className='flex flex-row gap-10 items-center justify-center'>
        <Molecule1/>
        <Molecule2/>
        <Molecule3/>
        <CompressedMolecule/>
        <div className=''>
        <Molecule5/>
        </div>
        </div>
        
          
          
         
          
        
       
      </div>
      
    </div>
  );
};

export default Hemispherewithmolecules;
// {description&&(<div className='bg-red-700 mb-40'>
//   hi there 
// </div>)}
// <Image src={image3d5} alt='image' height={50} width={50}/>

// <Image src={image3d2} alt='image' height={50} width={50}/>
// {description&&(<div className='bg-red-700'>
//   hi there 
// </div>)}
// <Image src={image3d3} alt='image' height={50} width={50}/>
// {description&&(<div className='bg-red-700'>
//   hi there 
// </div>)}
// <Image src={image3d4} alt='image' height={50} width={50}/>
// {description&&(<div className='bg-red-700'>
//   hi there 
// </div>)}