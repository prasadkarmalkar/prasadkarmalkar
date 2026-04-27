
import AllProjects from '@/components/Projects/AllProjects'
import React from 'react'

function page() {
    return (
        <main className='min-h-screen'>
            <section className='relative py-24 sm:py-32 overflow-hidden'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-600/6 rounded-full blur-[140px] pointer-events-none' />
                <div className='relative z-10 max-w-6xl mx-auto px-5 sm:px-8'>
                    <p className='text-[11px] font-medium uppercase tracking-[0.2em] text-gray-600 mb-4'>All Projects</p>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter'>
                        Built with{' '}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400'>precision</span>
                    </h1>
                    <p className='mt-5 text-gray-500 max-w-lg text-[15px]'>A curated collection of production-ready applications showcasing full-stack expertise.</p>
                </div>
            </section>
            <div className='section-divider' />
            <div className='px-5 sm:px-8'>
                <AllProjects />
            </div>
        </main>
    )
}

export default page