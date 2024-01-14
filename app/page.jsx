"use client"
import GradientText from "@/components/Utils/GradientText";
import { FaDownload } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import {motion} from 'framer-motion';
export default function Home() {
	const variants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.3} },
        hidden: { opacity: 0, y: 10 },
    }
	return (
		<section className="mt-36 m-auto h-full relative flex-1">
			<motion.h1 initial="hidden" whileInView="visible" variants={variants} className="text-6xl max-w-5xl m-auto text-center font-semibold leading-snug opacity-0 translate-y-24">Empowering Your <GradientText>Vision </GradientText> Through Precision <GradientText>Web Development.</GradientText></motion.h1>
			<div className='h-48 w-48 rounded-full blur-3xl absolute -z-10 bg-gradient-to-r from-orange-500 to-red-500 left-5 top-5 opacity-50 '></div>
			<motion.p initial="hidden" whileInView="visible" variants={variants} className="max-w-5xl m-auto mt-14 text-3xl text-center">Experienced web developer specializing in frontend technologies, dedicated to crafting seamless and innovative solutions for enhanced user experiences.</motion.p>
			<div className="flex justify-around mt-20">
				<button className="bg-gradient-to-r hover:scale-110 transition-transform from-pink-500 to-purple-500 rounded-lg pr-2 w-max h-full"><div className="w-full h-full bg-slate-100 text-black font-bold m-1 px-10 py-4 rounded-lg flex justify-between items-center gap-2"><FaRegComments /> Lets Connect </div></button>
				<button className="bg-gradient-to-r hover:scale-110 transition-transform from-purple-500 to-pink-500  rounded-lg pr-2 w-max h-full"><div className="w-full h-full bg-black m-1 px-10 py-4 rounded-lg flex justify-between items-center gap-2"><FaDownload /> Resume </div></button>
			</div>
		</section>
	)
}
