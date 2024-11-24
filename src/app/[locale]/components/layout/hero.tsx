import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import H1 from '@/components/ui/typography/h1'
import { cn } from '@/lib/utils'
import { BlocksIcon } from 'lucide-react'
import Link from 'next/link'
import { DeepRequired } from 'react-hook-form'
import ServerDecoSVG from '../../../../../public/assets/server-double.svg'
import { Home } from '../../../../../sanity.types'
import { TrustedBy } from '../../../../components/trusted-by-slider'

type Props = {
	translations: DeepRequired<Home>['hero']
}

export const HeroSection = ({ translations }: Props) => {
	const { badge, cta, heading, subtitle, trustedBy } = translations

	return (
		<header className='relative space-y-16 py-16 md:space-y-20 md:py-20 lg:space-y-24 lg:py-24'>
			<div className='relative z-10 flex flex-col items-center py-8 text-center md:py-12'>
				<Badge className='flex items-center gap-2 border-primary-foreground/25 py-1.5 text-sm font-normal leading-none'>
					<BlocksIcon className='size-3.5' />
					<span>{badge}</span>
				</Badge>
				<H1 className='mb-3 mt-4 max-w-5xl text-balance bg-gradient-to-b from-primary-foreground from-70% to-[#A9B2E1] bg-clip-text py-2.5 text-transparent [word-break:break-word] md:mb-4'>
					{heading}
				</H1>
				<p className='max-w-xl text-base text-primary-foreground md:text-lg'>{subtitle}</p>
				<Link
					href='/#contact'
					className={cn(
						buttonVariants({ variant: 'secondaryGradient', size: 'lg' }),
						'mt-8 h-auto gap-3 py-1 pl-1 pr-6 md:mt-12'
					)}>
					<div className='flex items-center justify-center rounded-full bg-gradient-to-b from-[#434343] to-[#000000] p-3 text-white'>
						<Icons.Rocket className='!size-5' />
					</div>
					<span className='text-base font-medium leading-[1.1]'>{cta}</span>
				</Link>
			</div>

			<TrustedBy label={trustedBy} className='relative z-10' />

			<div className='absolute bottom-0 left-0 z-0 size-[80vw] min-h-[450px] min-w-[450px] translate-x-[-20%] translate-y-[-20%] -rotate-[20deg] opacity-[0.03] md:top-0 xl:size-[65vw]'>
				<ServerDecoSVG width='100%' height='100%' />
			</div>
		</header>
	)
}
