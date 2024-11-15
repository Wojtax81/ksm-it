import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import H1 from '@/components/ui/typography/h1'
import { fallbackContent } from '@/lib/fallbackContent'
import { BlocksIcon } from 'lucide-react'
import { Home } from '../../../../../sanity.types'
import { TrustedBy } from '../../../../components/trusted-by-slider'
import ServerDecoSVG from '../../../../../public/assets/server-double.svg'

type Props = {
	translations: Home['hero']
}

const mergeWithFallback = <T extends Record<string, any>>(primary: T, fallback: T): T => {
	const result: T = { ...primary }

	Object.keys(result).forEach(key => {
		if (result[key] === null || result[key] === undefined || result[key] === '') {
			;(result[key] as any) = fallback[key]
		}
	})

	return result
}

export const HeroSection = ({ translations }: Props) => {
	const {
		home: { hero: fallback }
	} = fallbackContent

	const content = mergeWithFallback(translations || {}, fallback)

	return (
		<header className='relative space-y-16 py-16 md:space-y-20 md:py-20 lg:space-y-24 lg:py-24'>
			<div className='relative z-10 flex flex-col items-center py-8 text-center md:py-12'>
				<Badge className='flex items-center gap-2 border-primary-foreground/25 py-1.5 text-sm font-normal leading-none'>
					<BlocksIcon className='size-3.5' />
					<span>{content.badge}</span>
				</Badge>
				<H1 className='mb-3 mt-4 max-w-4xl bg-gradient-to-b from-primary-foreground from-70% to-[#A9B2E1] bg-clip-text py-2.5 text-transparent md:mb-4'>
					{content.heading}
				</H1>
				<p className='max-w-xl text-base text-primary-foreground md:text-lg'>{content.subtitle}</p>
				<Button variant={'secondaryGradient'} size={'lg'} className='mt-8 h-auto gap-3 py-1 pl-1 pr-6 md:mt-12'>
					<div className='flex items-center justify-center rounded-full bg-gradient-to-b from-[#434343] to-[#000000] p-3 text-white'>
						<Icons.Rocket className='!size-5' />
					</div>
					<span className='text-base font-medium leading-[1.1]'>{content.cta}</span>
				</Button>
			</div>

			<TrustedBy className='relative z-10' />

			<div className='absolute bottom-0 left-0 z-0 size-[80vw] min-h-[450px] min-w-[450px] translate-x-[-20%] translate-y-[-20%] -rotate-[20deg] opacity-[0.03] md:top-0 xl:size-[65vw]'>
				<ServerDecoSVG width='100%' height='100%' />
			</div>
		</header>
	)
}
