import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import {FaLink, FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import { motion, useScroll, useSpring } from "framer-motion";
import { NAVLINKS } from '../constants'
import { a } from 'framer-motion/client'


const Navbar = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  // .progress-bar {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   height: 10px;
  //   background: var(--red);
  //   transform-origin: 0%;
  // }
  
  return (
    <div className='fixed top-0 left-0 right-0 z-20 bg-gradient-to-r from-violet-950 to-violet-800'>
      <div className='flex items-center justify-between px-8 py-3' >
        <div className='flex flex-shrink-0 items-center'>
          <span className='text-3xl font-semibold'>TG</span>
        </div>
        <div className='flex flex-wrap gap-4 justify-center items-center text-base'>
          {NAVLINKS.map((link, index)=>(
            <a  href={"#" + link.id} >{link.displayText}</a>
          ))}
        </div>
        <div className=' flex items-center justify-center gap-4 text-2xl'>
        
          <a href="https://www.linkedin.com/in/tejas-godse-141453191/" target='_blank'><FaLinkedin /></a>
          <a href="https://github.com/tejasgodse24" target='_blank'><FaGithub /></a>
          <a href="https://x.com/Tejas_2_4?t=bKy_JpqPXBqCZeS90942Gg&s=09" target='_blank'><FaTwitterSquare /></a>

        </div>
      </div>
      <motion.div className="h-1 bg-slate-200 origin-left" style={{ scaleX }} />
    </div>
  )
}

export default Navbar
