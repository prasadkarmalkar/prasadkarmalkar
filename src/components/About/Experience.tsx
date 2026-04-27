import React from 'react';
import { JourneyData } from '@/data/data';

function Experience() {

	return (
		<section id='experience' className='py-24 sm:py-32 max-w-4xl mx-auto'>
			<div className='mb-16'>
				<p className='text-[11px] font-medium uppercase tracking-[0.2em] text-gray-600 mb-4'>Career</p>
				<h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
					My{' '}
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400'>journey</span>
				</h2>
			</div>
			<div className='space-y-0'>
				{JourneyData.map((item, index) => (
					<div key={index} className='group relative pl-8 pb-12 last:pb-0'>
						{/* Timeline line */}
						{index < JourneyData.length - 1 && (
							<div className='absolute left-[7px] top-3 bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent' />
						)}
						{/* Timeline dot */}
						<div className='absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-white/10 bg-[#0a0a0b] group-hover:border-violet-400/50 transition-colors duration-300'>
							<div className='absolute inset-[3px] rounded-full bg-gradient-to-r from-pink-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
						</div>
						{/* Content */}
						<div className='gradient-border rounded-xl p-5 ml-4 group-hover:border-white/10'>
							<div className='flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2'>
								<h3 className='text-base font-semibold text-white'>{item.position}</h3>
								<span className='text-[12px] text-gray-600 font-mono'>{item.from} — {item.to}</span>
							</div>
							<p className='text-[13px] text-violet-400/80 font-medium mb-3'>{item.company}</p>
							<p className='text-sm text-gray-500 leading-relaxed'>{item.details}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Experience;
