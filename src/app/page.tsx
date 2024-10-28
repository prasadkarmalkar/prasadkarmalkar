import AboutMe from '@/components/AboutMe';
import ContactMe from '@/components/ContactMe';
import Experience from '@/components/Experience';
import RecentBlogs from '@/components/RecentBlogs';
import RecentProjects from '@/components/RecentProjects';
import TechStack from '@/components/TechStack';
import { FaAngleRight, FaChevronDown } from "react-icons/fa6";

export default function Home() {
	return (
		<main className=''>
			<section className='h-[calc(100vh-100px)] flex flex-col justify-between items-center gap-20'>
				<div className='flex-1 flex flex-col justify-center items-center'>
					<h1 className='text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600'><strong>PRASAD KARMALKAR</strong></h1>
					<p className='mt-10 max-w-lg text-center'>Experienced software developer specializing in web technologies, dedicated to crafting seamless and innovative solutions for enhanced user experiences.</p>
					<button className='group mt-20 flex border px-7 py-3 rounded-full items-center gap-2 hover:bg-white hover:text-black transition-all duration-300'>Let's Connect <FaAngleRight className='group-hover:ml-2 transition-all duration-300' /></button>
				</div>
				<FaChevronDown />
			</section>
			<RecentProjects />
			<RecentBlogs />
			<ContactMe />
		</main>
	);
}
