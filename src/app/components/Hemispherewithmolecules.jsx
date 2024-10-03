'use client'
import Image from 'next/image';
import Hemisphere from './Hemispherewithmolecules/Hemisphere';

import image3d1 from '../assets/svg/mol5.svg';
import detailimage1 from "../assets/svg/detailsofmolecule1.svg"
import image3d2 from '../assets/svg/moleculesdetail/2.svg';
import image3d3 from '../assets/svg/moleculesdetail/3.svg';
import image3d4 from '../assets/svg/moleculesdetail/4.svg';
import image3d5 from '../assets/svg/moleculesdetail/5.svg';
import { useState } from 'react';

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
        className={`absolute -top-20 hidden   lg:block  bg-gradient-to-b from-gray-400 via-gray-300 to-white  md:h-[100%] md:w-screen lg:h-[100vh] lg:w-full`}
      >
        <Hemisphere />
      </div>
      <div
        className={`absolute h-20 hidden lg:block w-20 lg:w-full z-20 md:left-[32%] md:top-[20%] lg:left-[0%] xl:left-[0%] lg:top-[400px] xl:top-[600px]`} 
      >
        <div className='flex flex-row lg:gap-20 xl:gap-40 h-40 w-full'>
          <div className='flex-col lg:ml-60 xl:ml-80'>
          <Image src={image3d1} alt='image' height={50} width={50} onClick={onhandleclick1} className=''/>
          {description1&&(<div className=' h-80 justify-center items-center absolute lg:-top-96 lg:-left-20 xl:-top-80 xl:left-[30%] w-96  '>
            <Image src={detailimage1} alt='image' className='ml-36' />
        </div>)}
          </div>
          <div className='flex-col'>
          <Image src={image3d2} alt='image' height={50} width={50} onClick={onhandleclick2} className=''/>
          {description2&&(<div className=' h-80 justify-center items-center absolute -top-80 left-[30%] w-96  '>
            <Image src={detailimage1} alt='image' className='ml-36' />
        </div>)}
          </div>
          <div className='flex-col'>
          <Image src={image3d3} alt='image' height={50} width={50} onClick={onhandleclick3} className=''/>
          {description3&&(<div className=' h-80 justify-center items-center absolute -top-80 left-[30%] w-96  '>
            <Image src={detailimage1} alt='image' className='ml-36' />
        </div>)}
          </div>
          <div className='flex-col'>
          <Image src={image3d4} alt='image' height={50} width={50} onClick={onhandleclick4} className=''/>
          {description4&&(<div className=' h-80 justify-center items-center absolute -top-80 left-[30%] w-96  '>
            <Image src={detailimage1} alt='image' className='ml-36' />
        </div>)}
          </div>
          <div className='flex-col'>
          <Image src={image3d5} alt='image' height={50} width={50} onClick={onhandleclick5} className=''/>
          {description5&&(<div className=' h-80 justify-center items-center absolute -top-80 left-[30%] w-96  '>
            <Image src={detailimage1} alt='image' className='ml-36' />
        </div>)}
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