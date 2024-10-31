import AboutMe from '@/components/About/AboutMe'
import Experience from '@/components/About/Experience'
import TechStack from '@/components/About/TechStack'
import GradientText from '@/components/GradientText'
import React from 'react'

function page() {
    return (
        <main className='min-h-screen mt-5'>
            <h1 className='px-4 sm:px-8 text-4xl sm:text-5xl text-center py-20 sm:py-40 bg-gray-900'><strong><GradientText>Develop</GradientText> | Create | <GradientText>Inspire</GradientText> </strong></h1>
            <div className='p-4 sm:p-8'>
                <AboutMe />
                <TechStack />
                <Experience />
            </div>
        </main>
    )
}

export default page