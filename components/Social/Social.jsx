"use client"
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './social.css'
import { motion } from 'framer-motion'
function Social() {
  return (
    <nav className='fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-14 justify-end p-10 text-4xl'>
      <motion.div whileHover={{scale:1.5, transition:{ duration: 0.5 }}}><Link className='transition-transform' href={''}><FaGithub /></Link></motion.div>
      <motion.div><Link className='hover:scale-125 transition-transform' href={''}><FaLinkedin /></Link></motion.div>
      <motion.div><Link className='hover:scale-125 transition-transform' href={''}><FaInstagram /></Link></motion.div>
      <Link className='hover:scale-125 transition-transform' href={''}><IoMdMail /></Link>
    </nav>
  )
}

export default Social