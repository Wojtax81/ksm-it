import { PlaceholderImage } from '@/components/placeholder-image'
import { SectionHeading } from '@/components/section-heading'
import H3 from '@/components/ui/typography/h3'
import { cn } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'
import * as Tabs from '@radix-ui/react-tabs'
import { ListOrderedIcon } from 'lucide-react'
import Image from 'next/image'
import { DeepRequired } from 'react-hook-form'
import { Home } from '../../../../../sanity.types'

type Props = {
	translations: DeepRequired<Home>['howItWorks']
}

export const HowItWorksSection = ({ translations }: Props) => {
	const { cards, sectionHeading } = translations

	return (
		<section id='how-it-works' className='scroll-m-20 space-y-12 py-16'>
			<SectionHeading
				align='left'
				heading={sectionHeading.title}
				description={sectionHeading.description}
				badge={{
					text: sectionHeading.badge,
					Icon: ListOrderedIcon
				}}
			/>

			<div>
				<Tabs.Root defaultValue='tab-1' orientation='horizontal' className='grid gap-6 lg:grid-cols-2'>
					<Tabs.List className='h-max'>
						{cards.map((item, index) => (
							<Tabs.Trigger key={index} value={`tab-${index + 1}`} asChild className={'relative w-full'}>
								<HowItWorksCard index={index + 1} title={item.title} description={item.description} />
							</Tabs.Trigger>
						))}
					</Tabs.List>

					{cards.map((item, index) => (
						<Tabs.Content key={index} value={`tab-${index + 1}`}>
							<div className='relative flex aspect-[4/3] h-auto w-full items-center justify-center overflow-hidden rounded-2xl border bg-secondary lg:aspect-auto lg:h-full lg:w-auto'>
								{item.image?.asset._ref ? (
									<Image
										className='absolute inset-0 h-full w-full object-cover'
										width={1000}
										height={1000}
										alt={''}
										src={urlForImage(item.image)?.height(1000).width(1000).url() as string}
									/>
								) : (
									<PlaceholderImage className='absolute inset-0 size-full border-none' />
								)}
							</div>
						</Tabs.Content>
					))}
				</Tabs.Root>
			</div>
		</section>
	)
}

type HowItWorksCardProps = {
	index: number
	title: string
	description: string
}

const HowItWorksCard = ({ title, description, index }: HowItWorksCardProps) => {
	return (
		<div
			className={cn(
				'group relative flex w-full cursor-pointer flex-col gap-y-2 overflow-hidden border-t px-6 py-8 text-start text-muted-foreground transition-[padding-left,background] duration-300',
				'data-[state=active]:rounded-2xl data-[state=active]:border data-[state=active]:border-border data-[state=active]:bg-gradient-primary data-[state=active]:py-6 data-[state=active]:text-primary-foreground sm:data-[state=active]:pl-14',
				'data-[state=active]:z-20 data-[state=active]:translate-y-px'
			)}>
			<div className='flex items-start gap-x-3 gap-y-4 group-data-[state=active]:flex-col'>
				<span className='z-0 text-xl font-semibold group-data-[state=active]:text-9xl group-data-[state=active]:leading-[0.8] sm:left-6 sm:group-data-[state=active]:absolute sm:group-data-[state=active]:opacity-40 md:text-2xl'>
					0{index}
				</span>
				<H3 className='z-20'>{title}</H3>
			</div>
			<div className='z-20 overflow-hidden group-data-[state=active]:block group-data-[state=inactive]:hidden'>
				<p className='z-20 max-w-md text-sm leading-normal group-data-[state=active]:text-primary-foreground md:text-base'>
					{description}
				</p>
			</div>

			<div className='absolute left-0 top-0 z-10 h-full w-[200px] bg-gradient-to-r from-primary to-[#172476]/0 opacity-0 group-data-[state=active]:opacity-100 sm:duration-300' />
		</div>
	)
}
