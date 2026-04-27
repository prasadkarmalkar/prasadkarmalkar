import ContactMe from '@/components/Home/ContactMe';
import RecentProjects from '@/components/Home/RecentProjects';
import SocialMedia from '@/components/Home/SocialMedia';
import AboutMe from '@/components/About/AboutMe';
import TechStack from '@/components/About/TechStack';
import Experience from '@/components/About/Experience';
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa6";

export default function Home() {
	return (
		<main>
			{/* ─── Hero ─── */}
			<section className='min-h-[calc(100vh-65px)] flex flex-col justify-center items-center relative px-4 sm:px-8 overflow-hidden'>
				{/* Ambient orbs */}
				<div className='absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[160px] pointer-events-none animate-pulse-glow' />
				<div className='absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/8 rounded-full blur-[140px] pointer-events-none animate-pulse-glow' style={{ animationDelay: '2s' }} />

				<div className='relative z-10 flex flex-col items-center max-w-4xl'>
					{/* Status pill */}
					<div className='px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm text-[13px] text-gray-400 mb-10 animate-fade-in-down flex items-center gap-2'>
						<span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse' />
						Available for new opportunities
					</div>

					{/* Name */}
					<h1 className='text-5xl sm:text-7xl lg:text-8xl text-center font-bold tracking-tighter leading-[0.9] animate-fade-in-up'>
						Prasad
						<br />
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400 animate-gradient'>
							Karmalkar
						</span>
					</h1>

					{/* Role + summary */}
					<p className='mt-8 text-center text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl animate-fade-in-up animation-delay-200'>
						Senior Software Engineer at <span className='text-white font-medium'>rtCamp</span> — I build fast, scalable web applications with React, Next.js & TypeScript for enterprise clients.
					</p>

					{/* CTAs */}
					<div className='mt-10 flex flex-col gap-3 sm:flex-row items-center sm:gap-4 animate-fade-in-up animation-delay-400'>
						<Link
							href='#contact'
							className='group text-sm px-7 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-2'
						>
							Get in touch
							<span className='group-hover:translate-x-0.5 transition-transform'>→</span>
						</Link>
						<Link
							href='#projects'
							className='text-sm px-7 py-3 rounded-full border border-white/10 text-gray-300 hover:border-white/25 hover:text-white transition-all duration-300'
						>
							View projects
						</Link>
					</div>

					{/* Social */}
					<div className='animate-fade-in-up animation-delay-600'>
						<SocialMedia />
					</div>
				</div>

				{/* Scroll hint */}
				<div className='absolute bottom-10 animate-bounce'>
					<FaChevronDown className='text-white/20 text-sm' />
				</div>
			</section>

			{/* Divider */}
			<div className='section-divider' />

			{/* ─── About ─── */}
			<div id='about'>
				<AboutMe />
			</div>

			{/* Divider */}
			<div className='section-divider' />

			{/* ─── Tech Stack ─── */}
			<div className='px-4 sm:px-8'>
				<TechStack />
			</div>

			{/* Divider */}
			<div className='section-divider mt-24' />

			{/* ─── Projects ─── */}
			<div id='projects' className='px-4 sm:px-8'>
				<RecentProjects />
			</div>

			{/* Divider */}
			<div className='section-divider' />

			{/* ─── Experience ─── */}
			<div className='px-4 sm:px-8'>
				<Experience />
			</div>

			{/* Divider */}
			<div className='section-divider mt-24' />

			{/* ─── Contact ─── */}
			<div className='px-4 sm:px-8'>
				<ContactMe />
			</div>
		</main>
	);
}
