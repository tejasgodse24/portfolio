import React, { useState } from 'react'
import logo from "../assets/kevinRushLogo.png"
import {FaLink, FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import { motion, useScroll, useSpring } from "framer-motion";
import { NAVLINKS } from '../constants'
import { a } from 'framer-motion/client'
import { MdOutlineMenu } from 'react-icons/md'


const Navbar = () => {

  const [activeLinkID, setActiveLinkId] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = (id)=>{
    if(isMenuOpen){
      toggleMenu();
    }
    setActiveLinkId(id);
  }

  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  
  return (
    <div className='fixed top-0 left-0 right-0 z-20 bg-gradient-to-r from-violet-950 to-violet-800'>
      <div className='flex items-center justify-between px-16 py-4' >
        <div className='flex flex-shrink-0 items-center'>
          <a href='/' className='text-3xl font-semibold'>TG</a>
        </div>

        <div className='flex flex-wrap gap-10 justify-center items-center md:hidden'>
          <MdOutlineMenu onClick={toggleMenu} className='text-4xl cursor-pointer'/>
        </div>

        {/* <div className={`flex max-w-md:hidden flex-wrap gap-10 justify-center items-center text-base font-semibold`}> */}
        <div className={`z-10 flex flex-col md:flex-row md:gap-10 justify-center items-center text-base font-semibold md:flex ${isMenuOpen ? 'absolute right-16 top-14 bg-gradient-to-r from-violet-950 to-violet-800 px-4 rounded-lg py-4 gap-5' : 'hidden'} md:block`}>
          
          {NAVLINKS.map((link, index)=>(
            <a className={`${activeLinkID == link.id ? 'font-extrabold' : 'font-light'}`} onClick={()=>handleLinkClick(link.id)} href={"#" + link.id} >{link.displayText}</a>
          ))}
        </div>
        
      </div>
      <motion.div className="h-1 bg-slate-200 origin-left" style={{ scaleX }} />
    </div>
  )
}

export default Navbar
