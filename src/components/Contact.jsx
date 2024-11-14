import React, { useRef, useEffect, useState } from 'react'
import { CONTACT } from '../constants'
import {FaLink, FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'

const Contact = () => {
  const notify = () => toast("Message Sent Successfully !"
  );


  useEffect(() => emailjs.init("jIaR7vlnSmINus6eD"), []);
  const emailRef = useRef();
  const nameRef = useRef();
  const msgRef = useRef();

  //  Add these
   const handleSubmit = async (e) => {
     e.preventDefault();
     const serviceId = "service_8vk6e5m";
     const templateId = "template_uuax4r6";
     try {
      
       await emailjs.send(serviceId, templateId, {
         name: nameRef.current.value,
         email:emailRef.current.value,
         message: msgRef.current.value,
       });
       notify();
       nameRef.current.value = "";
       emailRef.current.value = "";
       msgRef.current.value = "";

     } catch (error) {
       console.log(error);
     } 
   };
   return (
    <motion.div 
    id='contact-section'
    initial={{y: -100, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5}}
      className='border-b border-neutral-900 py-10'>
      <h2 className='my-10 text-center text-5xl'>Contact</h2>
       <div className='flex w-full'>
       <form className="w-full flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
         <div className="flex flex-col gap-2 w-full lg:w-1/3 ">
           <label htmlFor="">Name</label>
           <input required className='p-4 text-xl bg-purple-950 rounded-md' ref={nameRef} placeholder="Enter your name" />
         </div>
         <div className="flex flex-col gap-2 w-full lg:w-1/3 ">
           <label htmlFor="">Email</label>
           <input required className='p-4 text-xl bg-purple-950 rounded-md' ref={emailRef} type="email" placeholder="Enter your email" />
         </div>
         <div className="flex flex-col gap-2 w-full lg:w-1/3   ">
           <label htmlFor="">Message</label>
           <textarea required className='p-4 text-xl bg-purple-950 rounded-md' ref={msgRef} type="text" placeholder="Enter your message" />
         </div>
         <button className="cursor-pointer text-2xl py-3 px-8 my-4 bg-gradient-to-r from-purple-900 to-purple-500  rounded-md text-white transition-all duration-300 ease-in-out transform hover:from-purple-700 hover:to-purple-400 hover:shadow-lg" >
           Send
         </button>
       </form>
       </div>
       <div>
        
       <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition: Bounce
        />
      </div>
        <div className='m-8 flex items-center justify-center gap-4 text-4xl'>
      <a href="https://www.linkedin.com/in/tejas-godse-141453191/" target='_blank'><FaLinkedin /></a>
       <a href="https://github.com/tejasgodse24" target='_blank'><FaGithub /></a>
       <a href="https://www.instagram.com/tejas_2_4/" target='_blank'><FaInstagram  /></a>

       {/* <a href="https://x.com/Tejas_2_4?t=bKy_JpqPXBqCZeS90942Gg&s=09" target='_blank'><FaTwitterSquare /></a> */}
      </div>
     </motion.div>
   );
 
}

export default Contact
