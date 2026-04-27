import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLink } from "react-icons/fa";
import { projects } from '@/data/data';

function AllProjects() {
	return (
		<section className='py-16 sm:py-24 max-w-3xl mx-auto'>
			<div className='space-y-6'>
				{projects.map((project) => {
					return (
						<div id={project.name} key={project.name} className='group gradient-border rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-6'>
							<div className="w-full sm:w-48 shrink-0 overflow-hidden rounded-xl">
								<Image
									src={project.image}
									width={210}
									height={180}
									alt={`${project.name} screenshot`}
									className='w-full rounded-xl group-hover:scale-[1.02] transition-transform duration-500'
								/>
							</div>
							<div className='flex-grow'>
								<h3 className='text-lg font-semibold mb-1.5'>{project.name}</h3>
								<p className='text-sm text-gray-500 leading-relaxed mb-3'>
									{project.description}
								</p>
								<div className='flex flex-wrap gap-1.5 mb-4'>
									{project.technologies.map((technology) => (
										<span key={technology} className='text-[11px] px-2 py-0.5 rounded-full bg-white/[0.04] text-gray-500 border border-white/[0.04]'>{technology}</span>
									))}
								</div>
								<div className='flex gap-2'>
									<a href={project.github} target='_blank' rel='noopener noreferrer' className='flex items-center gap-1.5 text-[12px] text-gray-600 hover:text-white border border-white/[0.06] hover:border-white/20 rounded-full px-3 py-1.5 transition-all duration-300'>
										<FaGithub className='text-xs' /> Code
									</a>
									{project.link && (
										<a href={project.link} target='_blank' rel='noopener noreferrer' className='flex items-center gap-1.5 text-[12px] text-gray-600 hover:text-white border border-white/[0.06] hover:border-white/20 rounded-full px-3 py-1.5 transition-all duration-300'>
											<FaLink className='text-xs' /> Live
										</a>
									)}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default AllProjects;
