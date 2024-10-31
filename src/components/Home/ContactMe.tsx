import React from 'react'
import { IoMdSend } from "react-icons/io";
import GradientText from '../GradientText';

function ContactMe() {
	return (
		<section className='mt-20 m-auto px-4 max-w-7xl'>
			<h2 className='text-3xl sm:text-4xl text-center'>Let's build something <strong><GradientText>great together.</GradientText></strong> </h2>
			<form action="" method="post" className='max-w-lg m-auto mt-20'>
				<div>
					<label htmlFor="name" className='text-gray-300'>Name</label>
					<input className='block bg-gray-900 text-white px-4 py-2 rounded-lg w-full mt-2 mb-4' type="text" name="name" id="name" placeholder='Enter your good name.'/>
				</div>
				<div>
					<label htmlFor="email" className='text-gray-300'>Email</label>
					<input className='block bg-gray-900 text-white px-4 py-2 rounded-lg w-full mt-2 mb-4' type="email" name="email" id="email" placeholder='Enter your email id.' />
				</div>
				<div>
					<label htmlFor="message" className='text-gray-300'>Message</label>
					<textarea className='block bg-gray-900 text-white px-4 py-2 rounded-lg w-full mt-2 mb-4' name="message" id="message" rows={5} placeholder='Enter your message.'/>
				</div>
				<button className='mt-8 text-center m-auto border px-14 rounded-full py-2 hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2' type="submit">Send <IoMdSend /></button>
			</form>
		</section>
	)
}

export default ContactMe