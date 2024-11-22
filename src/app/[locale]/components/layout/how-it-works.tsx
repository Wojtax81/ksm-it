import { SectionHeading } from '@/components/section-heading'
import H3 from '@/components/ui/typography/h3'
import { cn } from '@/lib/utils'
import * as Tabs from '@radix-ui/react-tabs'
import { ListOrderedIcon } from 'lucide-react'

type Props = {}

const HOW_IT_WORKS = [
	{
		title: 'Consultation',
		description:
			'We start by discussing your specific goals and needs, assessing your current setup to identify areas for improvement and potential solutions.',
		image: 'red'
	},
	{
		title: 'Solution Design',
		description:
			'Based on our findings, we create a tailored plan that includes system optimization, migration strategies, and security enhancements aligned with your business.',
		image: 'green'
	},
	{
		title: 'Implementation & Support',
		description:
			'Our team implements the solutions, ensuring everything runs smoothly, with continuous monitoring and support to maintain optimal performance and security.',
		image: 'blue'
	}
]

export const HowItWorksSection = (props: Props) => {
	return (
		<section id='how-it-works' className='scroll-m-20 space-y-12 py-16'>
			<SectionHeading
				align='left'
				heading='How we bring Your vision to life'
				description='From consultation to ongoing support, we ensure a smooth journey towards a fully optimized and secure system'
				badge={{
					text: 'How It Works',
					Icon: ListOrderedIcon
				}}
			/>

			<div>
				<Tabs.Root defaultValue='tab-1' orientation='horizontal' className='grid gap-6 lg:grid-cols-2'>
					<Tabs.List className='h-max'>
						{HOW_IT_WORKS.map((item, index) => (
							<Tabs.Trigger key={index} value={`tab-${index + 1}`} asChild className={'relative w-full'}>
								<HowItWorksCard index={index + 1} title={item.title} description={item.description} />
							</Tabs.Trigger>
						))}
					</Tabs.List>

					{HOW_IT_WORKS.map((item, index) => (
						<Tabs.Content key={index} value={`tab-${index + 1}`}>
							<div
								className='flex aspect-[4/3] h-auto w-full items-center justify-center rounded-2xl border bg-secondary lg:aspect-auto lg:h-full lg:w-auto'
								style={{ backgroundColor: item.image }}>
								IMG
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
