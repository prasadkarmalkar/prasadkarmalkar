import React from 'react';
import { FaChrome, FaCss3, FaFigma, FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaWordpress } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiMysql, SiNextdotjs, SiPostman, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import GradientText from '../GradientText';
import { gradientBorder } from '@/data/data';
function TechStack() {
	return (
		<section className='mt-20 max-w-screen-lg m-auto'>
			<h2 className='text-center text-3xl sm:text-4xl '>Tech Stack & <strong><GradientText>Mastery</GradientText></strong></h2>
			<div className='mt-20 grid grid-cols-1 grid-rows-7 sm:grid-cols-8 sm:grid-rows-6 gap-10 justify-center'>
				<div className={` ${gradientBorder} relative row-span-2 sm:row-span-2 sm:col-span-8 lg:col-span-5 lg:row-span-4  bg-gradient-to-r from-gray-950 to-gray-900 rounded-2xl`}>
					<h3 className='text-2xl sm:text-3xl my-6 text-center font-semibold '>
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
				<div className={` ${gradientBorder} relative row-span-1 sm:col-span-4 sm:row-span-1 lg:col-span-3 lg:row-span-2 bg-gradient-to-r from-gray-950 to-gray-900  rounded-2xl`}>
					<h3 className='text-2xl sm:text-3xl my-6 text-center font-semibold '>
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
				<div className={`${gradientBorder} relative row-span-1 sm:col-span-4 sm:row-span-1 lg:col-span-3 lg:row-span-2 bg-gradient-to-r from-gray-950 to-gray-900  rounded-2xl`}>
					<h3 className='text-2xl sm:text-3xl my-6 text-center font-semibold '>
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
				<div className={`${gradientBorder} relative row-span-2 sm:col-span-8 sm:row-span-2 lg:col-span-6 lg:row-span-2 bg-gradient-to-r from-gray-950 to-gray-900  rounded-2xl`}>
					<h3 className='text-2xl sm:text-3xl my-6 text-center font-semibold '>
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
				<div className={`${gradientBorder} relative row-span-1 sm:col-start-3 sm:row-span-1 sm:col-end-7 lg:col-span-2 lg:row-span-2 bg-gradient-to-r from-gray-950 to-gray-900  rounded-2xl`}>
					<h3 className='text-2xl sm:text-3xl my-6 text-center font-semibold'>
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
