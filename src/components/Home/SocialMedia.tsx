import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

function SocialMedia() {
  return (
    <div className='flex gap-3 mt-10'>
        <a className='rounded-full border border-white/[0.06] bg-white/[0.02] p-2.5 text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 text-lg' href='https://github.com/prasadkarmalkar' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
        </a>
        <a className='rounded-full border border-white/[0.06] bg-white/[0.02] p-2.5 text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 text-lg' href='https://www.linkedin.com/in/prasad-karmalkar-517380165/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin />
        </a>
        <a className='rounded-full border border-white/[0.06] bg-white/[0.02] p-2.5 text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 text-lg' href='https://x.com/prasad__20' target='_blank' rel='noopener noreferrer'>
          <FaXTwitter />
        </a>
    </div>
  )
}

export default SocialMedia