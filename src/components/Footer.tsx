import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
	return (
		<footer className='border-t border-white/[0.04] mt-24'>
			<div className='max-w-6xl mx-auto px-5 sm:px-8 py-16'>
				<div className='flex flex-col sm:flex-row justify-between items-start gap-12'>
					<div className='max-w-xs'>
						<Link href='/' className='text-xl font-bold tracking-tight'>
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400'>Prasad</span>
							<span className='text-gray-300'> Karmalkar</span>
						</Link>
						<p className='mt-4 text-sm text-gray-500 leading-relaxed'>
							Building performant web experiences with modern tools. Always open to interesting projects.
						</p>
						<div className='flex gap-3 mt-5'>
							<a className='text-gray-600 hover:text-white transition-colors duration-300 text-base' href='https://github.com/prasadkarmalkar' target='_blank' rel='noopener noreferrer'>
								<FaGithub />
							</a>
							<a className='text-gray-600 hover:text-white transition-colors duration-300 text-base' href='https://www.linkedin.com/in/prasad-karmalkar-517380165/' target='_blank' rel='noopener noreferrer'>
								<FaLinkedin />
							</a>
							<a className='text-gray-600 hover:text-white transition-colors duration-300 text-base' href='https://x.com/prasad__20' target='_blank' rel='noopener noreferrer'>
								<FaXTwitter />
							</a>
						</div>
					</div>
					<div className='flex gap-20'>
						<div>
							<h4 className='text-[11px] font-medium uppercase tracking-[0.2em] text-gray-600 mb-4'>Pages</h4>
							<ul className='space-y-2.5 text-sm'>
								<li><Link href='/' className='text-gray-500 hover:text-white transition-colors duration-300'>Home</Link></li>
								<li><Link href='/projects' className='text-gray-500 hover:text-white transition-colors duration-300'>Projects</Link></li>
								<li><Link href='/#contact' className='text-gray-500 hover:text-white transition-colors duration-300'>Contact</Link></li>
							</ul>
						</div>
						<div>
							<h4 className='text-[11px] font-medium uppercase tracking-[0.2em] text-gray-600 mb-4'>Sections</h4>
							<ul className='space-y-2.5 text-sm'>
								<li><Link href='/#about' className='text-gray-500 hover:text-white transition-colors duration-300'>About</Link></li>
								<li><Link href='/#projects' className='text-gray-500 hover:text-white transition-colors duration-300'>Work</Link></li>
								<li><Link href='/#experience' className='text-gray-500 hover:text-white transition-colors duration-300'>Experience</Link></li>
							</ul>
						</div>
					</div>
				</div>
				<div className='mt-14 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-3'>
					<p className='text-xs text-gray-600'>© {new Date().getFullYear()} Prasad Karmalkar</p>
					<p className='text-xs text-gray-600'>Next.js · Tailwind CSS · Vercel</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer