import React from 'react'
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='mt-20 mb-10 text-center text-5xl'>About</h2>
      <div className='flex flex-wrap'>
        
        <div className='w-full lg:p-8'>
            <div className='flex justify-center '>
               <motion.p 
               initial={{x: 100, opacity: 0}}
               whileInView={{x: 0, opacity: 1}}
               transition={{duration: 0.5}}
               className='my-2 max-w-5xl text-2xl text-justify text-neutral-400'>{ABOUT_TEXT}</motion.p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default About
