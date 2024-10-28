import Image from 'next/image';
import React from 'react';
import { FaChevronRight } from "react-icons/fa";

function RecentProjects() {
	return (
		<section className='my-20 m-auto'>
			<h2 className='text-center text-4xl'>Recent <strong className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600'>Creations</strong></h2>
			<div className='mt-20 flex 4xl:gap-20 md:gap-10 gap-5 px-4 justify-center flex-wrap'>
				{[1, 2, 3].map((project) => {
					return (
						<div key={project} className='relative'>
							<div className="overflow-hidden rounded-3xl relative">
								<Image
									src='/assets/test.jpeg'
									width={400}
									height={400}
									alt='Project Image'
								/>
								<div className='bg-gradient-to-t absolute bottom-0 py-4 from-gray-950 to-transparent w-full'>
									<h3 className='text-2xl px-4'>Guptachar</h3>
								</div>
							</div>
							<ul className="recent-project-tech bg-black rounded-bl-3xl flex gap-2 absolute top-0 right-0 px-4 py-2 before:content-[''] before:h-5 before:w-5 before:bg-black before:absolute before:-left-5 before:top-0 after:content-[''] after:h-5 after:w-5 after:bg-black after:absolute after:-bottom-5 after:right-0">
								<li className='bg-white text-black rounded-lg px-2'>HTML</li>
								<li className='bg-white text-black rounded-lg px-2'>CSS</li>
								<li className='bg-white text-black rounded-lg px-2'>JS</li>
							</ul>
							<div className="recent-project-more-container bg-black absolute bottom-0 right-0 p-2.5 rounded-tl-3xl before:content-[''] before:h-5 before:w-5 before:bg-black before:absolute before:right-0 before:-top-5 after:content-[''] after:h-5 after:w-5 after:bg-black after:absolute after:bottom-0 after:-left-5">
								<button className='bg-white text-black p-2.5 rounded-full'><FaChevronRight /></button>
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

export default RecentProjects;
