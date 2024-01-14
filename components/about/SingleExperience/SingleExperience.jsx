"use client"
import React, { useRef } from 'react'
import GradientText from '../../Utils/GradientText'
import {delay, motion, useScroll} from 'framer-motion'
function SingleExperience({ position, company, period, location, description, scrollRef }) {
    const variants = {
        visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5} },
        hidden: { opacity: 0, y: 20 },
    }
    

    return (
        <div className='flex justify-between' ref={scrollRef}>
            <div className='relative'>
                <div className='h-6 w-6 bg-white rounded-full outline absolute top-0 outline-purple-500 border-4 border-black'>
                </div>
            </div>
            <motion.div initial="hidden" whileInView="visible" variants={variants} className='pb-5'>
                <h3 className='text-3xl font-bold'>{position} <GradientText>@{company}</GradientText></h3>
                <p className='text-slate-200 mt-1'>{period} | {location}</p>
                <p className='mt-2 max-w-screen-sm'>{description}</p>
            </motion.div>
        </div>
    )
}

export default SingleExperience