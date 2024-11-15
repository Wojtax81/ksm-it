import React from 'react'
import { cn } from '@/lib/utils'

type Props = {
	children: React.ReactNode
	className?: string
}

const H1 = ({ className, children }: Props) => {
	return (
		<h1
			className={cn('scroll-m-20 text-5xl !leading-none font-heading font-bold md:text-6xl lg:text-[5rem]', className)}>
			{children}
		</h1>
	)
}

export default H1
