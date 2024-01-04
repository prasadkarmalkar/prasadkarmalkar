import React from 'react'
import GradientText from '../Utils/GradientText'

function SingleExperience({ position, company, period, location, description }) {
    return (
        <div className='flex justify-between'>
            <div>

            </div>
            <div className='pb-24'>
                <h3 className='text-3xl font-bold'>{position} <GradientText>@{company}</GradientText></h3>
                <p className='text-slate-200 mt-1'>{period} | {location}</p>
                <p className='mt-2 max-w-screen-sm'>{description}</p>
            </div>
        </div>
    )
}

export default SingleExperience