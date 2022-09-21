import React from 'react'

import './Icon.css'
export const Icon = ({ icon }) => {
	return (
		<>
			<img
				src={icon}
				alt="icon"
				className='icon24'
			/>
		</>
	)
}
