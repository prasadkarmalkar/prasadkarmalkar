
import GradientText from '@/components/GradientText'
import AllProjects from '@/components/Projects/AllProjects'
import React from 'react'

function page() {
    return (
        <main className='min-h-screen mt-5'>
            <h1 className='px-4 sm:px-8 text-4xl sm:text-5xl text-center py-20 sm:py-40 bg-gray-900'>Building with <strong><GradientText>Precision</GradientText></strong> and <strong><GradientText>Passion</GradientText></strong> </h1>
            <div className='p-4 sm:p-8'>
                <AllProjects />
            </div>
        </main>
    )
}

export default page