"use client"
import { useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import {motion} from 'framer-motion'
import SingleExperience from '../SingleExperience/SingleExperience';
function Experience() {
    
        const scrollRef = useRef(null)
        const { scrollYProgress } = useScroll({
            target: scrollRef,
            offset: ["start 0.7", "end center"],
        });

    return (
        <section className='mt-60'>
            <h2 className="text-4xl md:text-5xl xl:text-6xl text-center font-semibold leading-snug">Experience</h2>
            <div className='max-w-screen-lg m-auto mt-32 relative flex flex-col gap-14' ref={scrollRef}>
                <motion.div style={{ scaleY: scrollYProgress }} className='w-2 h-full bg-white absolute top-0 left-2 origin-top'></motion.div>
                <SingleExperience company={'rtCamp'} location={'Remote'} position={'Web Engineer'} period={'2023 - Present'} description={'Worked on different website development using WordPress. Created custom gutenberg blocks to meet client expectation and ease of UX. Worked on creating custom theme. Work on adding custom functionality to WordPress. Work on migration project from WordPress to WordPress VIP'} />
                <SingleExperience company={'Supersapeins Devlab'} location={'Pune'} position={'Intern'} period={'2022 - 2023'} description={'Worked on different website development using WordPress. Created custom gutenberg blocks to meet client expectation and ease of UX. Worked on creating custom theme. Work on adding custom functionality to WordPress. Work on migration project from WordPress to WordPress VIP'} />
                <SingleExperience company={'Casa Altair'} location={'Remote'} position={'Intern'} period={'2023 - Present'} description={'Worked on different website development using WordPress. Created custom gutenberg blocks to meet client expectation and ease of UX. Worked on creating custom theme. Work on adding custom functionality to WordPress. Work on migration project from WordPress to WordPress VIP'} />
            </div>
        </section>
    )
}

export default Experience