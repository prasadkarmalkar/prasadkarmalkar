import React from 'react';
import GradientText from '../GradientText';
import { FaRegPenToSquare } from "react-icons/fa6";

function RecentBlogs() {
	return (
		<section className='my-20 m-auto max-w-7xl'>
			<div className='text-center mb-16'>
				<p className='text-sm uppercase tracking-wider text-gray-400 mb-3'>Blog</p>
				<h2 className='text-3xl sm:text-4xl font-bold'>Recent <strong><GradientText>Writings</GradientText></strong></h2>
			</div>
			<div className='max-w-lg mx-auto text-center py-16 px-6 rounded-2xl border border-gray-800/50 bg-gray-900/20'>
				<FaRegPenToSquare className='text-4xl text-gray-600 mx-auto mb-6' />
				<h3 className='text-xl font-semibold text-gray-300 mb-3'>Coming Soon</h3>
				<p className='text-gray-500 text-sm'>I&apos;m working on sharing my thoughts on web development, architecture patterns, and engineering best practices. Stay tuned!</p>
			</div>
		</section>
	);
}

export default RecentBlogs;
