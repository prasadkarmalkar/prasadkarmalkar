import GradientText from '@/components/GradientText'
import React from 'react'
const page = () => {
  return (
	<main className='min-h-screen mt-5'>
		<h1 className='px-4 sm:px-8 text-4xl sm:text-5xl text-center py-20 sm:py-40 bg-gray-900'>Notes from a <strong><GradientText>Developer</GradientText></strong></h1>
		<div className='p-4 sm:p-8 max-w-screen-lg m-auto'>
			<h2 className='text-4xl text-center mt-10 font-semibold'>Coming soon!</h2>
			{/* <AllBlogs /> */}
		</div>
	</main>
  )
}

export default page