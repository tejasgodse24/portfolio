import React from 'react'
import { motion } from 'framer-motion'
import { EDUCATION } from '../constants'
const Education = () => {
    return (
        <div className='border-b border-neutral-900 py-10' id='education-section'>
            <motion.h2 
          initial={{y: -100, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 1}}
          className='my-20 text-center text-5xl'>Education</motion.h2>
          <div>
        {
            EDUCATION.map((education, index)=>(
                <div key={index} className=' flex flex-wrap lg:justify-center'>
                    <motion.div 
                        initial={{y: -100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 1}}
                        className='w-full lg:w-1/4'>
                        <p className='my-2 text-base text-right pr-8 text-neutral-400'>{education.year}</p>
                    </motion.div>
                    <motion.div
                        initial={{y: -100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 1}}
                        className='relative w-full max-w-xl lg:w-3/4 border-l-4  border-purple-700 px-8 py-1'>
                     <h6 className='mb-4 font-semibold text-2xl'>
                        {education.courseName} 
                        {education.fieldName && <span className='text-xl font-semibold text-purple-400'> - {education.fieldName}</span> }
                        
                     </h6>
                     <h6 className='mb-4 font-normal text-xl'>
                        {education.collegeName} 
                        <div className='text-xl text-purple-400'>{education.marks}</div>
                     </h6>
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

export default Education
