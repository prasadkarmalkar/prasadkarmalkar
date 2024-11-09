import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLink } from "react-icons/fa";
import GradientText from '../GradientText';
import { projects } from '@/data/data';
function AllProjects() {
	return (
		<section className='my-20 m-auto max-w-screen-md'>
			<h2 className='text-center text-3xl sm:text-4xl'>My <strong><GradientText>Creations</GradientText></strong></h2>
			<div className='mt-20'>
				{projects.map((project) => {
					return (
						<div id={project.name} key={project.name} className=' flex flex-wrap md:flex-nowrap items-center gap-5 bg-gray-900 p-5 rounded-xl my-10'>
							<div className="w-full max-w-52">
								<Image
									src={project.image}
									width={210}
									height={180}
									alt='Project Image'
									className='m-auto rounded-xl'
								/>
							</div>
							<div className='flex-grow'>
								<h3 className='text-xl sm:text-2xl font-semibold mb-2'>{project.name}</h3>
								<p className='mb-3'>
									{project.description}
								</p>
								<ul className="text-sm sm:text-base rounded-bl-3xl flex gap-2 mb-3">
									{project.technologies.map((technology) => <li key={technology} className='bg-white text-black rounded-lg px-2'>{technology}</li>)}
								</ul>
								<div className='flex text-lg gap-4'>
									<a href={project.github} className='border p-2 rounded-full hover:text-black hover:bg-white transition-all duration-300'><FaGithub /></a>
									{project.link && <a href={project.link} className='border p-2 rounded-full hover:text-black hover:bg-white transition-all duration-300'><FaLink /></a>}
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
