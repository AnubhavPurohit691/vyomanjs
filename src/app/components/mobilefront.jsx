"use client"
import Image from 'next/image'

import React from 'react'
import Loadingcube from './Loadingcube'
import { motion } from 'framer-motion'
import scroll from "../assets/svg/scrolldownindicator.svg"
const Mobilefront = () => {
  return (
    
    <div className='  w-screen h-[70%] lg:hidden object-contain '>
      <Loadingcube/>
      
      <div  className={`flex gap-5  ml-16 sm:ml-40  md:ml-60 absolute text-center top-10 items-center justify-center flex-col h-screen text-xl  `}>
      <motion.div
      initial={{opacity:0,y:-50}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.2}}
      >
          <div >Invisible doesn&apos;t mean harmless.</div>
          </motion.div>
        
        <div>
          
                <div className='text-center '>
                <motion.div
                initial={{opacity:0,y:-50}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.5}}
                >
                   <span className='font-bold mr-1'>9 out of 10 </span>
                 people worldwide </motion.div>

                 <motion.div
                 initial={{opacity:0,y:-50}}
                 animate={{opacity:1,y:0}}
                 transition={{duration:1}}
                 >
                 <div className='block text-center'>
                breathe polluted air daily.
                    </div>
                 </motion.div>
                
                </div>
          </div>
      </div>
      <div className='flex justify-center z-20 top-[30%]  md:mt-20'>
      <Image src={scroll} alt='image' className='h-10 w-10 ' />
      </div>
    </div>
  )
}

export default Mobilefront
