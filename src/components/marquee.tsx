'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'

export const Marquee = ({
	children,
	direction = 'left',
	speed = 1,
	pauseOnHover = true,
	className,
	scrollClassName,
	asList = true,
	gradient = true
}: {
	children: React.ReactNode
	direction?: 'left' | 'right'
	speed?: number
	pauseOnHover?: boolean
	className?: string
	scrollClassName?: string
	asList?: boolean
	gradient?: boolean
}) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const scrollerRef = useRef<HTMLDivElement | HTMLUListElement>(null)

	const [start, setStart] = useState(false)

	useEffect(() => {
		addAnimation()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children)

			scrollerContent.forEach(item => {
				const duplicatedItem = item.cloneNode(true)
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem)
				}
			})

			getDirection()
			getSpeed()
			setStart(true)
		}
	}

	const getDirection = () => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty('--animation-direction', 'forwards')
			} else {
				containerRef.current.style.setProperty('--animation-direction', 'reverse')
			}
		}
	}

	const getSpeed = () => {
		if (containerRef.current) {
			containerRef.current.style.setProperty('--animation-duration', `${40 / speed}s`)
		}
	}

	const TrackComponent = asList ? 'ul' : 'div'

	return (
		<div
			ref={containerRef}
			className={cn(
				'scroller relative z-20 max-w-full overflow-hidden',
				gradient && '[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
				className
			)}>
			<TrackComponent
				ref={scrollerRef as any}
				className={cn(
					'flex w-max min-w-full shrink-0 flex-nowrap gap-4',
					start && 'animate-scroll',
					pauseOnHover && 'hover:[animation-play-state:paused]',
					scrollClassName
				)}>
				{children}
			</TrackComponent>
		</div>
	)
}
