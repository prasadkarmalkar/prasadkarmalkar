import React from 'react';
import GradientText from '../GradientText';
import { JourneyData } from '@/data/data';
import { FaCalendarAlt, FaRegDotCircle} from "react-icons/fa";

function Experience() {

	return (
		<section className='mt-20 m-auto'>
			<h2 className='text-center text-4xl'>My <strong><GradientText>Journey</GradientText></strong></h2>
			<div className='mt-20 max-w-4xl m-auto flex flex-col'>
				{
					JourneyData.map((item, index) => (
						<div className={`${index%2 === 0 ? 'md:mr-auto md:m-0 md:after:-right-1.5 md:after:m-0 md:after:left-auto' : 'md:ml-auto md:m-0 md:after:m-0 md:after:right-auto' } after:right-0 after:left-0 after:m-auto after:-z-10 m-auto py-10  md:w-1/2 relative after:absolute after:content-[''] after:top-0 after:h-full after:w-1.5 after:bg-white`} key={index}>
							<div className={`bg-gray-900 ${index%2 === 0 ? 'mr-auto' : 'ml-auto' } max-w-96 p-4 rounded-lg `} >
                            	<h3 className='text-lg font-semibold '>{item.position}</h3>
								<div className='mt-1 flex justify-between bg-gray-800 text-sm rounded-lg px-4 py-1'>
									<div className='flex items-center gap-1'><FaRegDotCircle className='text-xs' />{item.company}</div>
									<div className='flex items-center gap-1'><FaCalendarAlt /> {item.from} - {item.to}</div>
								</div>
                            	<p className='mt-3 text-xs text-justify'>{item.details}</p>
                        	</div>
							<span className={` ${index%2 === 0 ? 'after:-right-3' : 'after:-left-2' } after:content-[''] after:h-5 after:w-5 after:rounded-full after:bg-white after:-top-2 after:absolute  absolute bg-white h-0.5 w-full top-1/2 -z-20 hidden md:block`}></span>
						</div>
                    ))
				}
			</div>
		</section>
	);
}

export default Experience;
