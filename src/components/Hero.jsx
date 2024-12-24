import React from 'react'
import {HERO_CONTENT} from "../constants"
import profilePic from "../assets/TejasProfile.png"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}}
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35 relative mt-36'>
      <div className='flex flex-wrap'> 
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1 
                variants={container(0.1)}
                initial="hidden"
                animate="visible"
                className='pb-16 text-6xl font-light tracking-tight lg:mt-12 lg:text-8xl'
                >
                    Tejas Godse
                </motion.h1>
            </div>
            <motion.div 
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl  tracking-tight text-transparent'>
                Software Developer
            </motion.div>

            <motion.p 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='my-2 py-6 text-2xl font-light'>
                {HERO_CONTENT}
            </motion.p>

           
            <div className="flex w-full justify-center">
                <a
                className="cursor-pointer my-4 bg-gradient-to-r from-purple-900 to-purple-500 px-4 py-4 rounded-md text-white transition-all duration-300 ease-in-out transform hover:from-purple-700 hover:to-purple-400 hover:shadow-lg"
                href="https://drive.google.com/file/d/1MnvpoBN3G6g1bqY4ys-ybjDgSh7lEjfg/view?usp=sharing"
                target="_blank"
                >
                Download Resume
                </a>
            </div>


        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
      <div className='flex justify-center'>
        <motion.img 
        initial={{x: 100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 1, delay: 1.2}}
        src={profilePic} alt="Tejas Godse" className='rounded-lg'/>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Hero
