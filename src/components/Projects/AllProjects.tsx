import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLink } from "react-icons/fa";
import GradientText from '../GradientText';

function AllProjects() {
	return (
		<section className='my-20 m-auto max-w-screen-md'>
			<h2 className='text-center text-3xl sm:text-4xl'>My <strong><GradientText>Creations</GradientText></strong></h2>
			<div className='mt-20'>
				{[1, 2, 3].map((project) => {
					return (
						<div key={project} className=' flex flex-wrap md:flex-nowrap items-center gap-5 bg-gray-900 p-5 rounded-xl my-10'>
							<div className=" w-full">
								<Image
									src='/assets/test.jpeg'
									width={400}
									height={400}
									alt='Project Image'
									className='m-auto rounded-xl'
								/>
							</div>
							<div>
								<h3 className='text-xl sm:text-2xl font-semibold mb-2'>Guptachar</h3>
								<p className='mb-3'>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. porro nam et velit? Neque at facere culpa libero iste commodi omnis, doloremque soluta labore minus corrupti deserunt sed eos nesciunt?
								</p>
								<ul className="text-sm sm:text-base rounded-bl-3xl flex gap-2 mb-3">
									<li className='bg-white text-black rounded-lg px-2'>HTML</li>
									<li className='bg-white text-black rounded-lg px-2'>CSS</li>
									<li className='bg-white text-black rounded-lg px-2'>JS</li>
								</ul>
								<div className='flex text-lg gap-4'>
									<a href="" className='border p-2 rounded-full hover:text-black hover:bg-white transition-all duration-300'><FaGithub /></a>
									<a href="" className='border p-2 rounded-full hover:text-black hover:bg-white transition-all duration-300'><FaLink /></a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className='m-auto text-center mt-16'>
				<button className='border rounded-full px-4 py-2 hover:text-black hover:bg-white transition-all duration-300'>Load More</button>
			</div>
		</section>
	);
}

export default AllProjects;
