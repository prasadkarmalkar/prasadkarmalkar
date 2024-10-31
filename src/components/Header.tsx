"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';


function Header() {
	const router = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header>
			<div onClick={()=> setIsOpen(!isOpen)} className='md:hidden pt-5 ml-auto flex flex-col items-end group overflow-hidden z-20 relative mr-5'>
				<span className={`block h-0.5 w-5 bg-white mb-1.5 ${isOpen && '-rotate-45 -mb-0.5'} transition-all`}></span>
				<span className={`block h-0.5 w-5 bg-white mb-1.5 ${isOpen && 'rotate-45'} transition-all`}></span>
				<span className={`block h-0.5 w-5 bg-white ${isOpen && 'opacity-0'}`}></span>
			</div>
			<nav className={`md:block py-7 px-3 ${isOpen ? 'block absolute bottom-0 top-10 bg-black w-full -z-0 -mt-10 overflow-hidden' : 'hidden'}`}>
				<ul className={`sm:static flex-col items-center flex justify-center sm:flex-row sm:gap-5 gap-8 h-full`}>
					{
						[{name:'HOME', url: '/'}, {name:'ABOUT ME', url:'/about'}, {name:'PROJECTS',url:'/projects'}, {name:'BLOGS', url:'/blogs'}, {name:'CONTACT ME', url:'/contact'}].map(menuname => 
						<li key={menuname.name} className={`${router === menuname.url ? 'after:scale-x-100' : ''} relative after:block after:content-[''] after:absolute after:bottom-0 after:h-0.5 after:scale-x-0 after:hover:scale-x-100 after:w-full after:bg-gradient-to-r after:from-pink-500 after:to-violet-600 after:transition after:origin-left`}>
							<Link onClick={()=> setIsOpen(false)} href={menuname.url}>{menuname.name}</Link>
						</li>)
					}
				</ul>
			</nav>
		</header>
	)
}

export default Header