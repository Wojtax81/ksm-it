import React from 'react'
import { cn } from '@/lib/utils'

type Props = {
	children: React.ReactNode
	className?: string
}

const H3 = ({ className, children }: Props) => {
	return <h3 className={cn('font-heading scroll-m-20 text-xl font-semibold md:text-2xl', className)}>{children}</h3>
}

export default H3
