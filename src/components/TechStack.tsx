import React from 'react';
import { FaChrome, FaCss3, FaFigma, FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaWordpress } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiMysql, SiNextdotjs, SiPostman, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function TechStack() {
	return (
		<section className='mt-20 max-w-screen-lg m-auto'>
			<h2 className='text-center text-4xl '>Tech Stack & Mastery</h2>
			<div className='mt-20 grid grid-cols-8 grid-rows-6 gap-10 justify-center'>
				<div className='relative col-span-5 row-span-4 bg-gray-950 rounded-2xl'>
					<h3 className='text-4xl my-6 text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600'>
						FrontEnd
					</h3>
					<ul className='text-5xl flex gap-24 justify-evenly flex-wrap p-10'>
						<li>
							<FaHtml5 />
						</li>
						<li>
							<FaCss3 />
						</li>
						<li>
							<FaJs />
						</li>
						<li>
							<SiTypescript />
						</li>
						<li>
							<SiNextdotjs />
						</li>
						<li>
							<SiReact />
						</li>
						<li>
							<SiTailwindcss />
						</li>
					</ul>
				</div>
				<div className='col-span-3 row-span-2 bg-gray-950  rounded-2xl'>
					<h3 className='text-3xl my-6 text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600'>
						BackEnd
					</h3>
					<ul className='text-5xl flex gap-24 justify-evenly flex-wrap p-10'>
						<li className=''>
							<FaNodeJs />
						</li>
						<li>
							<SiExpress />
						</li>
					</ul>
				</div>
				<div className='col-span-3 row-span-2 bg-gray-950  rounded-2xl'>
					<h3 className='text-3xl my-6 text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600'>
						Databases
					</h3>
					<ul className='text-5xl flex gap-24 justify-evenly flex-wrap p-10'>
						<li>
							<SiMysql />
						</li>
						<li>
							<SiMongodb />
						</li>
					</ul>
				</div>
				<div className='col-span-6 row-span-2 bg-gray-950  rounded-2xl'>
					<h3 className='text-3xl my-6 text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600'>
						Tools
					</h3>
					<ul className='text-5xl flex gap-24 justify-evenly flex-wrap p-10'>
						<li>
							<FaGitAlt />
						</li>
						<li>
							<VscVscode />
						</li>
						<li>
							<SiPostman />
						</li>
						<li>
							<FaFigma />
						</li>
						<li>
							<FaChrome />
						</li>
					</ul>
				</div>
				<div className='col-span-2 row-span-2 bg-gray-950  rounded-2xl'>
					<h3 className='text-3xl my-6 text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600'>
						CMS
					</h3>
					<ul className='text-5xl flex gap-24 justify-evenly flex-wrap p-10'>
						<li>
							<FaWordpress />
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default TechStack;
