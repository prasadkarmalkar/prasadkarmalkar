import React from 'react';

function Experience() {
	const journeyData = [
		{
			position: 'Software Engineer',
			details: 'rtCamp July 2023 - Present'
		},
		{
			position: 'Software Engineer - Trainee',
            details: 'rtCamp Jan 2023 - July 2023'
		},
		{
			position: 'Full Stack Developer Intern',
            details: 'Supersapiens Devlab 2022 - 2023'
		},
		{
			position: 'FrontEnd Developer Intern',
            details: 'Casa Altair - 3 Months'
		},
		{
			position: 'Batchelor Of Engineering',
            details: 'D Y Patil College Of Engineering, Akurdi 2020 - 2023'
		},
		{
			position: 'Diploma in IT',
            details: 'Pimpri Chinchwad Polytechnic, Akurdi 2017 - 2020'
		},
		{
			position: 'SSC',
            details: 'Shree Bhairavnath High School, Bhosari 2017'
		}
	]
	return (
		<section className='mt-20 m-auto'>
			<h2 className='text-center text-4xl'>Journey</h2>
			<div className='mt-20 max-w-4xl m-auto flex flex-col'>
				{
					journeyData.map((item, index) => (
						<div className={`${index%2 === 0 ? 'mr-auto after:-right-1.5' : 'ml-auto' } py-10 af w-1/2 relative after:absolute after:content-[''] after:top-0 after:h-full after:w-1.5 after:bg-white`} key={index}>
							<div className={`bg-gray-950 ${index%2 === 0 ? 'mr-auto' : 'ml-auto' } w-80 text-center p-4 rounded-lg `} >
                            	<h3>{item.position}</h3>
                            	<p>{item.details}</p>
                        	</div>
							<span className={` ${index%2 === 0 ? 'after:-right-3' : 'after:-left-2' } after:content-[''] after:h-5 after:w-5 after:rounded-full after:bg-white after:-top-2 after:absolute  absolute bg-white h-0.5 w-full top-1/2 -z-20`}></span>
						</div>

                    ))
				}
			</div>
		</section>
	);
}

export default Experience;
