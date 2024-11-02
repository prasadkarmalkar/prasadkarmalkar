import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

function SocialMedia() {
  return (
    <div className='flex text-2xl sm:text-3xl gap-10 mt-20 flex-wrap justify-center'>
        <a className='rounded-full border p-2 hover:text-black hover:bg-white transition-all duration-300' href='https://github.com/prasadkarmalkar' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
        </a>
        <a className='rounded-full border p-2 hover:text-black hover:bg-white transition-all duration-300' href='https://www.linkedin.com/in/prasad-karmalkar-517380165/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin />
        </a>
        <a className='rounded-full border p-2 hover:text-black hover:bg-white transition-all duration-300' href='https://x.com/prasad__20' target='_blank' rel='noopener noreferrer'>
          <FaXTwitter />
        </a>
        <a className='rounded-full border p-2 hover:text-black hover:bg-white transition-all duration-300' href='https://www.instagram.com/prasad__20/' target='_blank' rel='noopener noreferrer'>
          <FaInstagram />
        </a>
  
    </div>
  )
}

export default SocialMedia