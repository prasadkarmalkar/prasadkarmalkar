import Link from 'next/link'
import React from 'react'

function NavLink({URL='/', children}) {
  return (
    <Link href={ URL } className='font-semibold text-lg hover:text-transparent transition-colors duration-500 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text'>{children}</Link>
  )
}

export default NavLink