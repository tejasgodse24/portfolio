import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import {FaLink, FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"



const Navbar = () => {
  return (
    <div className='mb-2 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        {/* <img className='mx-2 w-10 ' src={logo} alt="logo" /> */}
        <span className='text-3xl font-semibold'>TG</span>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
       
        <a href="https://www.linkedin.com/in/tejas-godse-141453191/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/tejasgodse24" target='_blank'><FaGithub /></a>
        <a href="https://x.com/Tejas_2_4?t=bKy_JpqPXBqCZeS90942Gg&s=09" target='_blank'><FaTwitterSquare /></a>

      </div>
    </div>
  )
}

export default Navbar
