import Image from 'next/image';
import React from 'react';

function AboutMe() {
	return (
		<section className='py-20 flex flex-wrap m-auto justify-center items-center gap-16 max-w-4xl'>
			<div className='h-60 basis-60 sm:h-80 overflow-hidden sm:basis-80 shrink-0 rounded-full'>
				<Image
					src='/assets/myself.webp'
					width={500}
					height={500}
					alt='Self Image'
				/>
			</div>
			<div className='max-w-lg'>
				<h3 className='mb-6 text-2xl'>
					<strong>BIOGRAPHY</strong>
				</h3>
				<p className='my-4'>
					<strong>Greetings! I'm Prasad Karmalkar</strong>, a Web
					Engineer armed with a degree in Information Technology,
					currently working as a Web Engineer at rtCamp.
				</p>

				<p className='my-4'>
					With a keen focus on crafting tailored WordPress solutions,
					I enjoy the challenge of bringing unique concepts to life
					within the WordPress ecosystem. Proficient in both frontend
					technologies like React JS and Next JS, as well as backend
					technologies including Node JS and Express JS, I bring a
					holistic approach to web engineering.
				</p>

				<p className='my-4'>
					In every line of code, my goal is to seamlessly merge
					creativity with functionality, ensuring that each digital
					endeavor is a captivating and user-friendly experience. Join
					me as we embark on this journey of turning ideas into
					compelling online realities!
				</p>
			</div>
		</section>
	);
}

export default AboutMe;
