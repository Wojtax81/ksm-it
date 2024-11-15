import React from 'react'
import { cn } from '@/lib/utils'

type Props = {
	children: React.ReactNode
	className?: string
}

const H2 = ({ className, children }: Props) => {
	return (
		<h2
			className={cn(
				'scroll-m-20 font-heading text-3xl font-bold transition-colors md:text-[2.5rem] !leading-[1.15] lg:text-5xl',
				className
			)}>
			{children}
		</h2>
	)
}

export default H2
