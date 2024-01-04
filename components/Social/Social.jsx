import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './social.css'
function Social() {
  return (
    <nav className='fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-14 justify-end p-10 text-4xl'>
      <Link className='hover:scale-125 transition-transform' href={''}><FaGithub /></Link>
      <Link className='hover:scale-125 transition-transform' href={''}><FaLinkedin /></Link>
      <Link className='hover:scale-125 transition-transform' href={''}><FaInstagram /></Link>
      <Link className='hover:scale-125 transition-transform' href={''}><IoMdMail /></Link>
    </nav>
  )
}

export default Social