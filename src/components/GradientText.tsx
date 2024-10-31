import React, { ReactNode } from 'react'

function GradientText({ children }: { children: ReactNode }) {
	return (
		<span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600'>{children}</span>
	)
}

export default GradientText