import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
function Header() {
  return (
	<header className='flex justify-between p-5 sticky top-0 backdrop-blur-sm md:mx-5 lg:mx-10 xl:mx-16'>
		<nav className='flex gap-8'>
			<NavLink>Home</NavLink>
			<NavLink URL='about'>About</NavLink>
			<NavLink>Experience</NavLink>
			<NavLink>Projects</NavLink>
		</nav>
		<h2 className='font-bold text-3xl border-2 text-white p-4 rounded-full font-sans absolute translate-x-[-50%] left-1/2 bg-black hover:bg-white hover:text-black translate-y-2'>
		  <Link className='' href={''}>PK</Link>
		</h2>
		<span className='absolute translate-x-[-50%] left-1/2 h-[1px] w-6/12 bg-white bottom-0 -z-10'></span>
	</header>
  )
}

export default Header