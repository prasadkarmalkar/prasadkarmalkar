
import GradientText from '@/components/Utils/GradientText'
import Image from 'next/image'
import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact, FaWordpress } from "react-icons/fa";
import { DiMongodb, DiMysql } from "react-icons/di";
import SkillContainer from '@/components/Utils/SkillContainer';
import Education from '@/components/about/Education/Education';
import Experience from '@/components/about/Experience/Experience';
function About() {
    return (
        <>
            <section >
                <h2 className='text-3xl sm:text-5xl md:text-6xl xl:text-8xl text-center font-semibold leading-snug mt-24'><GradientText>Develop.</GradientText> Create. <GradientText>Inspire.</GradientText></h2>
                <div className='flex max-w-screen-xl m-auto mt-24 justify-center gap-20 items-start flex-wrap'>
                    
                    <div className='max-w-xl flex flex-col gap-5 text-lg'>
                        <h5 className='font-bold text-xl'>BIOGRAPHY</h5>
                        <p><strong>Greetings! I'm Prasad Karmalkar,</strong> a Web Engineer armed with a degree in Information Technology, currently working as a Web Engineer at rtCamp.</p>

                        <p>With a keen focus on crafting tailored WordPress solutions, I enjoy the challenge of bringing unique concepts to life within the WordPress ecosystem. Proficient in both frontend technologies like React JS and Next JS, as well as backend technologies including Node JS and Express JS, I bring a holistic approach to web engineering.</p>

                        <p>In every line of code, my goal is to seamlessly merge creativity with functionality, ensuring that each digital endeavor is a captivating and user-friendly experience. Join me as we embark on this journey of turning ideas into compelling online realities!</p>
                    </div>
                    <div className='bg-white p-6 rounded-xl shadow-[15px_15px_0px_0px_rgba(143,143,143,1)] relative'>
                        <Image className='rounded-xl' src={'/myself.jpeg'} alt='Myself' height={'330'} width={'250'} />
                        <div className='h-40 w-40 rounded-full blur-3xl absolute -z-10 bg-gradient-to-r from-orange-500 to-red-500 right-0 top-14 -translate-y-1/2 translate-x-1/2'></div>
                    </div>
                </div>
            </section>
            <section className='mt-60'>
                <h2 className="text-4xl md:text-5xl xl:text-6xl text-center font-semibold leading-snug">Skills</h2>
                <div className='mt-32 max-w-screen-md m-auto text-7xl flex justify-center flex-wrap gap-20 xl:gap-40'>
                    <SkillContainer skill='html'><FaHtml5 /></SkillContainer>
                    <SkillContainer skill='css'><FaCss3 /></SkillContainer>
                    <SkillContainer skill='js'><FaJs /></SkillContainer>
                    <SkillContainer skill='react'><FaReact /></SkillContainer>
                    <SkillContainer skill='wordpress'><FaWordpress /></SkillContainer>
                    <SkillContainer skill='node'><FaNodeJs /></SkillContainer>
                    <SkillContainer skill='mongo'><DiMongodb /></SkillContainer>
                    <SkillContainer skill='mysql'><DiMysql /></SkillContainer>
                </div>
            </section>


            <Experience></Experience>
            <Education></Education>


        </>
    )
}

export default About