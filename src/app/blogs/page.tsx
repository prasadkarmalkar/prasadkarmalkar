import GradientText from '@/components/GradientText'
import React from 'react'
import { FaRegPenToSquare } from 'react-icons/fa6'

const page = () => {
  	return (
		<main className='min-h-screen'>
			<section className='relative py-24 sm:py-36 bg-grid overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-b from-gray-900/80 to-black pointer-events-none' />
				<div className='relative z-10 text-center px-4'>
					<p className='text-sm uppercase tracking-wider text-gray-400 mb-4'>Blog</p>
					<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>Notes from a <GradientText>Developer</GradientText></h1>
					<p className='mt-6 text-gray-400 max-w-2xl mx-auto text-lg'>Thoughts on web development, architecture, and engineering best practices.</p>
				</div>
			</section>
			<div className='p-4 sm:p-8 max-w-screen-lg m-auto'>
				<div className='max-w-lg mx-auto text-center py-20 px-6 rounded-2xl border border-gray-800/50 bg-gray-900/20 mt-16'>
					<FaRegPenToSquare className='text-4xl text-gray-600 mx-auto mb-6' />
					<h2 className='text-2xl font-semibold text-gray-300 mb-3'>Coming Soon</h2>
					<p className='text-gray-500'>I&apos;m working on articles about web performance, React patterns, WordPress architecture, and more. Stay tuned!</p>
				</div>
			</div>
		</main>
	)
}

export default page