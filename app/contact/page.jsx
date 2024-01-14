import GradientText from '@/components/Utils/GradientText'
import React from 'react'
import { Resend } from 'resend';

function page() {
    async function sendEmail(formData) {
        'use server'

        const name = formData.get('name')
        const email = formData.get('email')
        const message = formData.get('message')
        const resend = new Resend(process.env.RESEND_API);

        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'prasadkarmalkar2020@gmail.com',
            subject: `Got message from ${name}`,
            html: `
            Name: ${name} <br>
            Email: ${email} <br>
            Message:
            <p>${message}</p>`
        });

    }
    return (
        <section >
            <h2 className='text-3xl sm:text-5xl md:text-6xl xl:text-7xl text-center font-semibold leading-snug mt-24 max-w-screen-lg m-auto'>Let's make the <GradientText>world</GradientText> a better place <GradientText>together.</GradientText></h2>
            <form action={sendEmail} className='max-w-screen-sm m-auto mt-20 flex flex-col gap-10 '>
                <div>
                    <label htmlFor="name">Name</label>
                    <input className='mt-2 w-full text-white bg-transparent border rounded-lg text-lg p-2' type="text" name="name" id="name" placeholder='Enter Your Name' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input className='mt-2 w-full text-white bg-transparent border rounded-lg text-lg p-2' type="email" name="email" id="email" placeholder='Enter Your Email' />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea className='mt-2 w-full text-white bg-transparent border rounded-lg text-lg p-2' name='message' id='message' rows={4} placeholder='Enter Your Message' />
                </div>
                <div className=' bg-gradient-to-r hover:scale-110 transition-transform from-purple-500 to-pink-500 rounded-lg flex-shrink w-min'>
                    <input className='h-full bg-black m-1 px-10 py-4 rounded-lg flex justify-between items-center gap-2 cursor-pointer hover:bg-white hover:text-black' type="submit" value="Send" />
                </div>
            </form>
        </section>
    )
}

export default page