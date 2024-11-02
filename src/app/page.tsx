import ContactMe from '@/components/Home/ContactMe';
import RecentBlogs from '@/components/Home/RecentBlogs';
import RecentProjects from '@/components/Home/RecentProjects';
import SocialMedia from '@/components/Home/SocialMedia';
import Link from 'next/link';
import { FaAngleRight, FaChevronDown } from "react-icons/fa6";

export default function Home() {
	return (
		<main className='p-4 sm:p-8'>
			<section className='h-[calc(100vh-112px)] flex flex-col justify-between items-center'>
				<div className='flex-1 flex flex-col items-center justify-center'>
					<h1 className='text-4xl sm:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600'><strong>Prasad Karmalkar</strong></h1>
					<p className='mt-10 max-w-lg text-center text-gray-200'>Experienced software developer specializing in web technologies, dedicated to crafting seamless and innovative solutions for enhanced user experiences.</p>
					<div className='mt-10 lg:mt-20 flex flex-col gap-5 md:flex-row items-center  justify-center md:gap-20'>
						<Link href='#contactme' className='text-sm sm:text-base cursor-pointer group flex border px-6 sm:px-7 py-2 sm:py-3 rounded-full items-center gap-2 hover:bg-white hover:text-black transition-all duration-300'>Lets Connect <FaAngleRight className='group-hover:ml-2 transition-all duration-300' /></Link>
						<Link href='/about' className='text-sm sm:text-base cursor-pointer flex border px-6 sm:px-7 py-2 sm:py-3 rounded-full items-center gap-2 hover:bg-white hover:text-black transition-all duration-300'>About Me</Link>
					</div>
					<SocialMedia />
				</div>
				<FaChevronDown />
			</section>
			<RecentProjects />
			<RecentBlogs />
			<ContactMe />
		</main>
	);
}
