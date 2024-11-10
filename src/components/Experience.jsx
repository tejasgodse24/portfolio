import React from 'react'
import { EXPERIENCES } from '../constants'
import { animate, motion } from 'framer-motion'

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <motion.h2 
      initial={{y: -100, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5}}
      className='my-20 text-center text-4xl'>Experince</motion.h2>
      <div>
        {
            EXPERIENCES.map((experience, index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                        initial={{x: -100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 1}}
                        className='w-full lg:w-1/4'>
                        <p className='mb-2 text-base text-neutral-400'>{experience.year}</p>
                    </motion.div>
                    <motion.div
                        initial={{x: 100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 1}}
                        className='w-full max-w-xl lg:w-3/4'>
                     <h6 className='mb-4 text-xl font-semibold'>
                        {experience.role} - {" "}
                        <span className='text-base text-purple-100'>{experience.company}</span>
                     </h6>
                     {/* <p className='mb-4 text-neutral-400'>{experience.description}</p> */}
                     {/* <p className='mb-4 text-neutral-400' dangerouslySetInnerHTML={{ __html: experience.description }}></p> */}
                     {experience.description.split('*').map((line, idx) => (
                        <div className='flex '>
                        <span className='px-2 text-xl'>&#8226; </span>
                        <p key={idx} className=' text-neutral-400 py-1 mb-1'>{line}</p>
                        </div>
                     ))}
                     <div className='flex flex-wrap'>
                     {experience.technologies.map((tech, index)=>(
                        <div key={index} className='mr-2 my-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</div>
                     ))}
                     </div>
                    </motion.div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Experience
