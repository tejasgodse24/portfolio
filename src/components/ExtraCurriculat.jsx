import React from 'react'
import { EXPERIENCES, EXTRACURREXPERIENCES } from '../constants'
import { animate, motion } from 'framer-motion'
import { BiSolidHandRight } from 'react-icons/bi'


const ExtraCurriculat = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <motion.h2 
      initial={{y: -100, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 1}}
      className='my-20 text-center text-5xl'>Extra Curricular Experience</motion.h2>
        <div>
        {
            EXTRACURREXPERIENCES.map((experience, index)=>(
                <div key={index} className=' flex flex-wrap lg:justify-center'>
                    <motion.div 
                        initial={{y: -100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 1}}
                        className='w-full lg:w-1/4'>
                        {/* <p className='my-2 text-base text-right pr-8 text-neutral-400'>{experience.year}</p> */}
                    </motion.div>
                    <motion.div
                        initial={{y: -100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 1}}
                        className='relative w-full max-w-xl lg:w-3/4 border-l-4 border-purple-700 px-8 py-1'>
                     <h6 className='mb-4 font-semibold text-2xl'>
                        {experience.role} 
                        {experience.company && 
                        <span className='text-base text-purple-100'> -  {experience.company}</span>}
                     </h6>
                     
                     {experience.description.split('*').map((line, idx) => (
                        <div className='flex '>
                        <span className='px-2 text-xl'>&#8226; </span>
                        <p key={idx} className=' text-neutral-300 py-1 mb-1'>{line}</p>
                        </div>
                     ))}
                     <span className='absolute -top-4 -left-4 z-20 text-6xl text-purple-300'>&#8226;</span>
                     {/* <span className='absolute top-0 left-0 z-20 text-3xl'><BiSolidHandRight /></span> */}

                      
                    </motion.div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default ExtraCurriculat
