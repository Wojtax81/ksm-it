import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { Badge } from './ui/badge'
import H2 from './ui/typography/h2'

type Props = {
	badge: {
		Icon: LucideIcon
		text: string
		variant?: 'default' | 'secondary' | 'outline'
	}
	heading: string
	description: string
	align?: 'left' | 'center' | 'right'
	className?: string
}

export const SectionHeading = ({ badge, heading, description, className, align }: Props) => {
	return (
		<div
			className={cn(
				'flex max-w-md flex-col gap-y-3 md:max-w-lg',
				align === 'left' && 'items-start',
				align === 'center' && 'mx-auto items-center text-center',
				align === 'right' && 'ml-auto items-end text-right',
				className
			)}>
			<Badge variant={badge.variant || 'secondary'} className='w-max gap-2'>
				<badge.Icon className='size-3.5' />
				<span>{badge.text}</span>
			</Badge>
			<H2 className='text-balance capitalize text-foreground'>{heading}</H2>
			<p className='max-w-md text-balance leading-snug text-muted-foreground'>{description}</p>
		</div>
	)
}
