import React from 'react'
import { EXPERIENCES } from '../constants'
import { animate, motion } from 'framer-motion'

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 py-10' id='experience-section'>
      <motion.h2 
      initial={{y: -100, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5}}
      className='my-20 text-center text-5xl'>Experince</motion.h2>
      <div>
        {
            EXPERIENCES.map((experience, index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                        initial={{x: -100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 1}}
                        className='w-full lg:w-1/4'>
                        <p className='my-2 text-base text-neutral-400'>{experience.year}</p>
                    </motion.div>
                    <motion.div
                        initial={{x: 100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 1}}
                        className='w-full max-w-xl lg:w-3/4'>
                     <h6 className='mb-4 font-semibold text-2xl'>
                        {experience.role} - {" "}
                        <span className='text-base text-purple-100'>{experience.company}</span>
                     </h6>
                     <div className='flex justify-start items-center text-sm'>
                      {experience.liveLink && <a className='cursor-pointer mb-4 bg-gradient-to-r from-purple-900 to-purple-500 px-4 py-1 rounded-md text-white transition-all duration-300 ease-in-out transform hover:from-purple-700 hover:to-purple-400 hover:shadow-lg' href={experience.liveLink} target='_blank'>Live Link</a>}
                      {experience.githubLink && <a className='mx-8 cursor-pointer mb-4  bg-gradient-to-r from-purple-900 to-purple-500 px-4 py-1 rounded-md text-white transition-all duration-300 ease-in-out transform hover:from-purple-700 hover:to-purple-400 hover:shadow-lg' href={experience.githubLink} target='_blank'>GitHub Link</a>}

                     </div>
                     {/* <p className='mb-4 text-neutral-400'>{experience.description}</p> */}
                     {/* <p className='mb-4 text-neutral-400' dangerouslySetInnerHTML={{ __html: experience.description }}></p> */}
                     {experience.description.split('*').map((line, idx) => (
                        <div className='flex '>
                        <span className='px-2 text-xl'>&#8226; </span>
                        <p key={idx} className=' text-neutral-300 py-1 mb-1'>{line}</p>
                        </div>
                     ))}
                     <div className='flex flex-wrap'>
                     {experience.technologies.map((tech, index)=>(
                        
                        <div key={index} className='mr-2 my-1 rounded text-neutral-100 px-2 py-1 text-sm font-medium bg-purple-900'>{tech}</div>
                     
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
