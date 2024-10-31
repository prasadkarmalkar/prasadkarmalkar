import ContactMe from '@/components/Home/ContactMe';
import RecentBlogs from '@/components/Home/RecentBlogs';
import RecentProjects from '@/components/Home/RecentProjects';
import { FaAngleRight, FaChevronDown } from "react-icons/fa6";

export default function Home() {
	return (
		<main className='p-4 sm:p-8'>
			<section className='h-[calc(100vh-100px)] flex flex-col justify-between items-center gap-20'>
				<div className='flex-1 flex flex-col justify-center items-center'>
					<h1 className='text-4xl sm:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600'><strong>Prasad Karmalkar</strong></h1>
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
