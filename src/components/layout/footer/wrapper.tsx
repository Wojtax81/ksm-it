'use client'

import React, { useEffect, useRef, useState } from 'react'

type Props = {
	children: React.ReactNode
}

export const FooterWrapper = ({ children }: Props) => {
	const footerRef = useRef<HTMLDivElement>(null)

	const [footerHeight, setFooterHeight] = useState(0)

	useEffect(() => {
		if (!footerRef.current) return
		const resizeObserver = new ResizeObserver(() => {
			setFooterHeight(footerRef.current?.clientHeight || 0)
		})
		resizeObserver.observe(footerRef.current)
		return () => resizeObserver.disconnect()
	}, [footerRef])

	return (
		<div
			style={{
				paddingBottom: (footerHeight || 600) + 48
			}}
			className=''>
			<div ref={footerRef} className='fixed bottom-0 left-0 right-0 z-0'>
				{children}
			</div>
		</div>
	)
}
