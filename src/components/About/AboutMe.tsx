import Image from 'next/image';
import React from 'react';

function AboutMe() {
	return (
		<section id='about' className='py-24 sm:py-32 max-w-6xl mx-auto px-5 sm:px-8'>
			<div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-20'>
				{/* Image with floating accent */}
				<div className='relative shrink-0'>
					<div className='absolute -inset-4 bg-gradient-to-br from-pink-500/10 via-violet-500/10 to-indigo-500/10 rounded-3xl blur-2xl animate-pulse-glow' />
					<div className='relative h-56 w-56 sm:h-64 sm:w-64 overflow-hidden rounded-2xl ring-1 ring-white/[0.06]'>
						<Image
							src='/assets/myself.webp'
							width={500}
							height={500}
							alt='Prasad Karmalkar'
							className='object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700'
						/>
					</div>
				</div>

				{/* Text */}
				<div>
					<p className='text-[11px] font-medium uppercase tracking-[0.2em] text-gray-600 mb-4'>About</p>
					<h2 className='text-3xl sm:text-4xl font-bold tracking-tight mb-6'>
						Engineer who cares about{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400'>craft</span>
					</h2>
					<div className='space-y-4 text-[15px] text-gray-400 leading-relaxed'>
						<p>
							I&apos;m a Senior Software Engineer at <span className='text-gray-200 font-medium'>rtCamp</span> with 3+ years of building web applications that serve real users at scale. My background in Information Technology gives me a solid foundation across the entire stack.
						</p>
						<p>
							Day to day, I lead frontend architecture for enterprise WordPress and React/Next.js projects — making technical decisions, reviewing code, and mentoring developers. I care deeply about performance, accessibility, and clean code.
						</p>
						<p>
							Outside of work, I explore emerging technologies, build side projects, and contribute to the developer community. I believe the best software is built at the intersection of craft and empathy.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
