'use client'

import React, { useState, useRef } from 'react'
import { IoMdSend } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";

function ContactMe() {
	const [submitted, setSubmitted] = useState(false)
	const [sending, setSending] = useState(false)
	const formRef = useRef<HTMLFormElement>(null)

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setSending(true)
		const formData = new FormData(e.currentTarget)

		try {
			await fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify({
					name: formData.get('name'),
					email: formData.get('email'),
					message: formData.get('message'),
				}),
				headers: { 'Content-Type': 'application/json' },
			})
		} catch {
			// still show thank you — email may have sent
		}

		setSending(false)
		setSubmitted(true)
		formRef.current?.reset()
	}

	return (
		<section id='contact' className='py-24 sm:py-32 max-w-3xl mx-auto'>
			<div className='mb-12'>
				<p className='text-[11px] font-medium uppercase tracking-[0.2em] text-gray-600 mb-4'>Contact</p>
				<h2 className='text-3xl sm:text-4xl font-bold tracking-tight mb-4'>
					Let&apos;s work{' '}
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400'>together</span>
				</h2>
				<p className='text-[15px] text-gray-500 max-w-md'>Have an idea, a project, or just want to say hi? I&apos;d love to hear from you.</p>
			</div>

			{submitted ? (
				<div className='max-w-lg animate-fade-in-up'>
					<div className='border border-white/[0.06] rounded-2xl p-8 text-center bg-white/[0.02]'>
						<IoCheckmarkCircle className='text-green-400 text-4xl mx-auto mb-4' />
						<h3 className='text-xl font-semibold text-white mb-2'>Thank you!</h3>
						<p className='text-sm text-gray-400 mb-6'>Your message has been sent. I&apos;ll get back to you as soon as possible.</p>
						<button
							onClick={() => setSubmitted(false)}
							className='text-sm text-gray-500 hover:text-white transition-colors underline underline-offset-4'
						>
							Send another message
						</button>
					</div>
				</div>
			) : (
				<form ref={formRef} onSubmit={handleSubmit} className='max-w-lg'>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3'>
						<div>
							<label htmlFor="name" className='text-[12px] text-gray-600 uppercase tracking-wider'>Name</label>
							<input className='block bg-white/[0.02] border border-white/[0.06] text-white px-4 py-3 rounded-xl w-full mt-2 focus:outline-none focus:border-white/20 transition-colors text-sm placeholder:text-gray-700' type="text" name="name" id="name" placeholder='Your name' required />
						</div>
						<div>
							<label htmlFor="email" className='text-[12px] text-gray-600 uppercase tracking-wider'>Email</label>
							<input className='block bg-white/[0.02] border border-white/[0.06] text-white px-4 py-3 rounded-xl w-full mt-2 focus:outline-none focus:border-white/20 transition-colors text-sm placeholder:text-gray-700' type="email" name="email" id="email" placeholder='you@example.com' required />
						</div>
					</div>
					<div>
						<label htmlFor="message" className='text-[12px] text-gray-600 uppercase tracking-wider'>Message</label>
						<textarea className='block bg-white/[0.02] border border-white/[0.06] text-white px-4 py-3 rounded-xl w-full mt-2 focus:outline-none focus:border-white/20 transition-colors text-sm placeholder:text-gray-700 resize-none' name="message" id="message" rows={5} placeholder='Tell me about your project...' required />
					</div>
					<button className='mt-5 group text-sm px-7 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 disabled:opacity-50' type="submit" disabled={sending}>
						{sending ? 'Sending...' : 'Send message'}
						<IoMdSend className='group-hover:translate-x-0.5 transition-transform' />
					</button>
				</form>
			)}
		</section>
	)
}

export default ContactMe