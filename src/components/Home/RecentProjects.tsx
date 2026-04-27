import Image from 'next/image';
import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import { projects } from '@/data/data';
import Link from 'next/link';

function RecentProjects() {
	return (
		<section className='py-24 sm:py-32 max-w-6xl mx-auto'>
			<div className='mb-16'>
				<p className='text-[11px] font-medium uppercase tracking-[0.2em] text-gray-600 mb-4'>Portfolio</p>
				<h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
					Selected{' '}
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400'>work</span>
				</h2>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{projects.slice(0, 3).map((project) => {
					return (
						<div key={project.name} className='group gradient-border rounded-2xl overflow-hidden'>
							<div className="relative overflow-hidden aspect-[4/3]">
								<Image
									src={project.image}
									width={400}
									height={300}
									alt={`${project.name} preview`}
									className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-80' />
								<div className='absolute bottom-0 left-0 right-0 p-5'>
									<h3 className='text-lg font-semibold'>{project.name}</h3>
									<div className='flex gap-1.5 mt-2 flex-wrap'>
										{project.technologies.slice(0, 3).map((tech) => (
											<span key={tech} className='text-[11px] px-2 py-0.5 rounded-full bg-white/[0.06] text-gray-400'>{tech}</span>
										))}
									</div>
								</div>
							</div>
							<div className='p-5 pt-0'>
								<Link
									href={`/projects/#${project.name}`}
									className='inline-flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-white transition-colors duration-300 mt-3 group/link'
								>
									View project
									<FaChevronRight className='text-[10px] group-hover/link:translate-x-0.5 transition-transform' />
								</Link>
							</div>
						</div>
					);
				})}
			</div>
			<div className='mt-12'>
				<Link
					href={'/projects'}
					className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white border border-white/[0.06] hover:border-white/20 rounded-full px-6 py-2.5 transition-all duration-300'
				>
					View all projects
					<span className='text-[10px]'>→</span>
				</Link>
			</div>
		</section>
	);
}

export default RecentProjects;
