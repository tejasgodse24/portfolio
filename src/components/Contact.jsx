import React from 'react'
import { CONTACT } from '../constants'
import {FaLink, FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"


const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h2 className='my-10 text-center text-4xl'>Contact</h2>
      <div className='text-center'>
        <p className='my-4'>{CONTACT.phoneNo}</p>
        <p href="#" className='my-4 border-b border-neutral-900'>{CONTACT.email}</p>
      </div>
    
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/tejas-godse-141453191/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/tejasgodse24" target='_blank'><FaGithub /></a>
        <a href="https://x.com/Tejas_2_4?t=bKy_JpqPXBqCZeS90942Gg&s=09" target='_blank'><FaTwitterSquare /></a>
      </div>
      </div>
  )
}

export default Contact
