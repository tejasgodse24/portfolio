import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { animate, motion } from 'framer-motion'
import { SiDjango, SiHostinger, SiMicrosoftsqlserver } from 'react-icons/si'
import { FaAws, FaCss3Alt, FaGithub, FaHtml5, FaPython } from 'react-icons/fa'
import { PiFileSqlBold } from 'react-icons/pi'
import { IoLogoJavascript } from 'react-icons/io'
import { DiJqueryLogo, DiNginx } from 'react-icons/di'
import pythonLogo from "../assets/technologies/python.svg"
import djangoLogo from "../assets/technologies/django.svg"
import htmlLogo from "../assets/technologies/html.svg"
import cssLogo from "../assets/technologies/css.svg"
import javascriptLogo from "../assets/technologies/javascript.svg"
import awsLogo from "../assets/technologies/aws.svg"
import hostingerLogo from "../assets/technologies/hostinger.svg"
import githubLogo from "../assets/technologies/github.svg"
import jqueryLogo from "../assets/technologies/jquery.svg"
import nginxLogo from "../assets/technologies/nginx.svg"
import sqlLogo from "../assets/technologies/sql.svg"
import reactLogo from "../assets/technologies/react.svg"
import cppLogo from "../assets/technologies/cpp.svg"






const iconVarients = (duration)=>({
    initial:{y: -10},
    animate:{
        y: [10, -10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <motion.h2 
      initial={{y: -100, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5}}
      className='my-20 text-center text-5xl'>Technologies</motion.h2>
      
      <motion.div 
      initial={{x: -100, opacity: 0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{duration: 0.5}}
      className='flex flex-wrap items-center justify-center'>


      <motion.div 
      initial={{x: -100, opacity: 0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{duration: 0.5}}
      className='flex flex-wrap items-center justify-center gap-10 lg:max-w-4xl'>

        <motion.div 
        variants={iconVarients(3.2)}
        initial="initial"
        animate="animate"
        className='rounded-2xl bg-slate-300  border-4 border-neutral-800 p-4'>
            {/* <SiDjango className='text-7xl text-green-800' /> */}
            <img src={djangoLogo} alt="" width={70} height={70} />

        </motion.div>

        <motion.div 
        variants={iconVarients(1.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl bg-slate-300  border-4 border-neutral-800 p-4'>
            {/* <FaPython className='text-7xl text-cyan-400' /> */}
            <img src={pythonLogo} alt="" width={70} height={70} />
        </motion.div>

        <motion.div 
        variants={iconVarients(2.9)}
        initial="initial"
        animate="animate"
        className='rounded-2xl bg-slate-300  border-4 border-neutral-800 p-4'>
            {/* <PiFileSqlBold className='text-7xl text-cyan-400' /> */}
            <img src={sqlLogo} alt="" width={70} height={70} />

        </motion.div>

        <motion.div 
        variants={iconVarients(4.4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl bg-slate-300  border-4 border-neutral-800 p-4 '>
            {/* <RiReactjsLine className='text-7xl text-cyan-400' /> */}
            <img src={reactLogo} alt="" width={70} height={70} />

        </motion.div>

        <motion.div 
        variants={iconVarients(3.4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl bg-slate-300  border-4 border-neutral-800 p-4'>
            {/* <FaHtml5 className='text-7xl text-cyan-400' /> */}
            <img src={htmlLogo} alt="" width={70} height={70} />

        </motion.div>

        <motion.div 
        variants={iconVarients(3.4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl bg-slate-300  border-4 border-neutral-800 p-4'>
            {/* <FaCss3Alt className='text-7xl text-cyan-400' /> */}
            <img src={cssLogo} alt="" width={70} height={70} />

        </motion.div>

        <motion.div 
        variants={iconVarients(3.4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl bg-slate-300  border-4 border-neutral-800 p-4'>
            {/* <IoLogoJavascript className='text-7xl text-cyan-400' /> */}
            <img src={javascriptLogo} alt="" width={70} height={70} />

        </motion.div>

        <motion.div 
        variants={iconVarients(3.4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl bg-slate-300  border-4 border-neutral-800 p-4'>
            {/* <DiJqueryLogo className='text-7xl text-cyan-400' /> */}
            <img src={jqueryLogo} alt="" width={70} height={70} />

        </motion.div>

        <motion.div 
        variants={iconVarients(3.4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl bg-slate-300  border-4 border-neutral-800 p-4'>
            {/* <FaAws className='text-7xl text-cyan-400' /> */}
            <img src={awsLogo} alt="" width={70} height={70} />

        </motion.div>

        <motion.div 
        variants={iconVarients(3.4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl bg-slate-300  border-4 border-neutral-800 p-4'>
            {/* <img src={hostingerLogo} alt="" width={70} height={70} /> */}
            <img src={cppLogo} alt="" width={70} height={70} />
            
        </motion.div>

        <motion.div 
        variants={iconVarients(3.4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl bg-slate-300  border-4 border-neutral-800 p-4'>
            {/* <DiNginx className='text-7xl text-cyan-400' /> */}
            <img src={nginxLogo} alt="" width={70} height={70} />

        </motion.div>

        <motion.div 
        variants={iconVarients(3.4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl bg-slate-300  border-4 border-neutral-800 p-4'>
            {/* <FaGithub className='text-7xl text-cyan-400' /> */}
            <img src={githubLogo} alt="" width={70} height={70} />

        </motion.div>
         
      </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
