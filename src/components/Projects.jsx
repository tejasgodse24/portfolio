import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

 
const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-24' id='projects-section'>
      <motion.h2 
      initial={{y: -100, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5}}
      className='my-20 text-center text-5xl'>Projects</motion.h2>
      <div>
        {
            PROJECTS.map((project, index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div
                        initial={{x: -100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 1}}
                        className='w-full lg:w-1/4'>
                        <img src={project.image} width={150} height={150} alt={project.title} className='mb-6 rounded' />
                    </motion.div>
                    <motion.div
                        initial={{x: 100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 1}}
                        className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='text-xl mb-2 font-semibold'>{project.title}</h6>

                    {
                    project.githubLink &&
                     <a 
                     key={index} className='mx-2 cursor-pointer mb-4  bg-gradient-to-r from-purple-900 to-purple-500 px-4 py-1 rounded-md text-white transition-all duration-300 ease-in-out transform hover:from-purple-700 hover:to-purple-400 hover:shadow-lg' href={project.githubLink} target='_blank'>GitHub Link</a>

                    }

                    
                    {project.description.split('*').map((line, idx) => (
                        <div className='flex '>
                        <span className='px-2 text-xl'>&#8226; </span>
                        <p key={idx} className=' text-neutral-300 py-1 mb-1'>{line}</p>
                        </div>
                     ))}
                    {/* <p className='mb-4 text-neutral-400'>{project.description}</p> */}
                    
                     <div className='flex flex-wrap'>
                    {
                        project.technologies.map((tech, i)=>(
                            <span key={i} className='mr-2 my-1 rounded text-neutral-100 px-2 py-1 text-sm font-medium bg-purple-900'>{tech}</span>
                        ))
                    }
                    </div>
                    </motion.div>
                </div>
            ))
        }
      </div>
      </div>
  )
}

export default Projects
