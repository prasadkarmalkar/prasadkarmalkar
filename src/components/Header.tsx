"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

function Header() {
	const router = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : '';
		return () => { document.body.style.overflow = ''; };
	}, [isOpen]);

	return (
		<header className='sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0b]/80 border-b border-white/[0.04]'>
			<div className='max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4'>
				<Link href='/' className='text-base font-bold tracking-tight z-20 relative'>
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400'>PK</span>
					<span className='text-gray-500 font-normal ml-1.5 text-sm hidden sm:inline'>/ engineer</span>
				</Link>
				<button onClick={() => setIsOpen(!isOpen)} className='md:hidden flex flex-col justify-center items-center z-[60] relative cursor-pointer w-10 h-10 -mr-2' aria-label='Toggle menu'>
					<span className={`block h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'w-5 rotate-45 translate-y-[1px]' : 'w-5 mb-1.5'}`}></span>
					<span className={`block h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'w-5 -rotate-45 -translate-y-[1px]' : 'w-5 mb-1.5'}`}></span>
					<span className={`block h-[1.5px] bg-white transition-all duration-300 origin-right ${isOpen ? 'w-0 opacity-0' : 'w-3.5'}`}></span>
				</button>
				{/* Desktop nav */}
				<nav className='hidden md:flex items-center gap-1'>
					{
						[{ name: 'Home', url: '/' }, { name: 'Projects', url: '/projects' }, { name: 'About', url: '/#about' }, { name: 'Experience', url: '/#experience' }].map(menuname =>
							<Link
								key={menuname.name}
								href={menuname.url}
								className={`${router === menuname.url ? 'text-white' : 'text-gray-500 hover:text-gray-200'} px-3 py-1.5 text-[13px] transition-all duration-300`}
							>
								{menuname.name}
							</Link>)
					}
					<Link
						href='/#contact'
						className='ml-3 text-[13px] px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300'
					>
						Contact
					</Link>
				</nav>
			</div>
			{/* Mobile fullscreen overlay */}
			<div className={`fixed inset-0 w-screen h-screen bg-[#0a0a0b] z-40 flex flex-col justify-center items-center transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
				<nav className='flex flex-col items-center gap-4'>
					{
						[{ name: 'Home', url: '/' }, { name: 'Projects', url: '/projects' }, { name: 'About', url: '/#about' }, { name: 'Experience', url: '/#experience' }].map((menuname, i) =>
							<Link
								key={menuname.name}
								onClick={() => setIsOpen(false)}
								href={menuname.url}
								className={`${router === menuname.url ? 'text-white' : 'text-gray-400 hover:text-white'} px-6 py-3 text-3xl font-medium tracking-tight transition-all duration-300`}
								style={{ transitionDelay: isOpen ? `${i * 75}ms` : '0ms', transform: isOpen ? 'translateY(0)' : 'translateY(20px)', opacity: isOpen ? 1 : 0 }}
							>
								{menuname.name}
							</Link>)
					}
					<Link
						onClick={() => setIsOpen(false)}
						href='/#contact'
						className='mt-8 text-lg px-10 py-3.5 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300'
						style={{ transitionDelay: isOpen ? '300ms' : '0ms', transform: isOpen ? 'translateY(0)' : 'translateY(20px)', opacity: isOpen ? 1 : 0 }}
					>
						Contact
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header