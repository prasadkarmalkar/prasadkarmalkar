"use client"
import { useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import SingleExperience from '../SingleExperience/SingleExperience';
function Experience() {

    const scrollRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start 0.8", "end 0.9"],
        smooth: true
    });

    return (
        <section className='mt-60 pb-40'>
            <h2 className="text-4xl md:text-5xl xl:text-6xl text-center font-semibold leading-snug">Education</h2>
            <div className='max-w-screen-lg m-auto mt-32 relative flex flex-col gap-14' ref={scrollRef}>
                <motion.div style={{ scaleY: scrollYProgress }} className='w-2 h-full bg-white absolute top-0 left-2 origin-top'></motion.div>
                <SingleExperience location={'D Y Patil College Of Engineering, Akurdi'} position={'Batchelor Of Engineering In IT'} period={'2020 - 2023'} description={'Worked on different website development using WordPress. Created custom gutenberg blocks to meet client expectation and ease of UX. Worked on creating custom theme. Work on adding custom functionality to WordPress. Work on migration project from WordPress to WordPress VIP'} />
                <SingleExperience location={'Pimpri Chinchwad Polytechnic, Akurdi'} position={'Diploma in IT'} period={'2017 - 2020'} description={'Worked on different website development using WordPress. Created custom gutenberg blocks to meet client expectation and ease of UX. Worked on creating custom theme. Work on adding custom functionality to WordPress. Work on migration project from WordPress to WordPress VIP'} />
                <SingleExperience location={'Shree Bhairavnath High School, Bhosari'} position={'SSC'} period={'2017'} description={'Worked on different website development using WordPress. Created custom gutenberg blocks to meet client expectation and ease of UX. Worked on creating custom theme. Work on adding custom functionality to WordPress. Work on migration project from WordPress to WordPress VIP'} />          </div>
        </section>

    )
}

export default Experience