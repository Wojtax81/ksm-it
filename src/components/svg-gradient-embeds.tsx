import React from 'react'

type Props = {}

export const SVGGradientEmbeds = (props: Props) => {
	return (
		<div className='sr-only'>
			<svg aria-hidden='true' focusable='false' style={{ width: 0, height: 0, position: 'absolute' }}>
				<linearGradient id='fade-out-bottom-black' x2='0' y2='1'>
					<stop offset='20%' stopColor='#FFFFFF' />
					<stop offset='80%' stopColor='#00000000' />
				</linearGradient>
			</svg>
		</div>
	)
}
