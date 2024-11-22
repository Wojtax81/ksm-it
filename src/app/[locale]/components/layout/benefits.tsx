import { Icons } from '@/components/icons'
import { SectionHeading } from '@/components/section-heading'
import H3 from '@/components/ui/typography/h3'
import { cn } from '@/lib/utils'
import { TrophyIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Wordmark from '../../../../../public/assets/brand/wordmark.svg'

type Props = {}

export const BenefitsSection = (props: Props) => {
	return (
		<section className='py-16'>
			<SectionHeading
				align='center'
				heading="Elevate Your System for What's Next"
				description="Achieve a system that's always ready, always secure, and built to grow with you."
				badge={{
					text: 'Benefits',
					Icon: TrophyIcon
				}}
				className='mb-12'
			/>

			<div className='grid gap-4 md:grid-cols-2 md:grid-rows-[repeat(5,auto)] lg:grid-cols-4 lg:grid-rows-3'>
				<Card className='flex h-48 items-center justify-center bg-gradient-primary text-primary-foreground md:col-span-full md:h-auto lg:col-[2/4] lg:row-[2/3]'>
					<Wordmark className='absolute z-10 h-[100px] w-auto' />
					<svg viewBox='0 0 90 25' className='z-0 w-full fill-black/10 text-center font-black uppercase'>
						<text x='0' y='-0.1em'>
							<tspan x='0' dy='0.8em' dx='7'>
								We make
							</tspan>
							<tspan x='0' dy='0.8em' dx='3'>
								IT better
							</tspan>
						</text>
					</svg>

					<div className='absolute -top-4 left-6 h-[160px] w-[300px] rotate-[20deg] rounded-full bg-primary-foreground/25 blur-[60px]' />
					<div className='absolute right-[10%] top-[-40%] h-[240px] w-[140px] rotate-45 rounded-full bg-primary-foreground/25 blur-[40px]' />
				</Card>
				<Card className='flex flex-wrap-reverse items-center gap-x-12 md:col-[1/2] md:row-[2/4] md:flex-col-reverse md:justify-between lg:col-[1/2] lg:row-[1/3]'>
					<CardHeading
						heading='Enhanced Security'
						description='Keep your system safe with constant monitoring and advanced threat protection.'
						className='max-w-xs pt-4'
					/>
					<div className='relative mx-auto size-[150px] md:static'>
						<Image
							src='/images/benefits/benefits-security.png'
							alt=''
							width={500}
							height={500}
							className='absolute left-1/2 top-1/2 z-0 size-[400px] max-h-none max-w-none -translate-x-1/2 -translate-y-1/2 object-contain md:-top-12 md:translate-y-0'
						/>
					</div>
				</Card>
				<Card className='flex flex-col items-start gap-x-16 gap-y-4 max-lg:pb-0 sm:max-md:flex-row sm:max-md:items-center sm:max-md:justify-between md:col-[2/3] md:row-[3/5] lg:col-[2/4] lg:row-[1/2] lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-x-4 lg:py-0 lg:pl-0 xl:gap-x-8'>
					<CardHeading
						heading='Future-Ready Scalability'
						description='Easily adapt as your business grows with flexible, scalable solutions that make expanding your system simple and seamless.'
						className='lg:[&>p]:max-w-2xl'
					/>

					<div className='w-full max-md:shrink-0 sm:max-md:w-auto lg:relative lg:h-full'>
						<Image
							src='/images/benefits/benefits-scalability.png'
							alt=''
							width={600}
							height={600}
							className='aspect-square h-auto w-full max-w-96 -rotate-90 sm:max-w-72 lg:absolute lg:left-0 lg:top-1/2 lg:size-[250px] lg:-translate-y-1/2 lg:rotate-0'
						/>
					</div>
				</Card>
				<Card className='flex flex-col justify-end pt-[150px] sm:max-md:py-12 md:col-[1/2] md:row-[4/5] md:pt-[150px] lg:col-[4/5] lg:row-[2/4]'>
					<CardHeading
						heading='Reliable Support'
						description='Rely on proactive support to prevent issues before they arise, ensuring consistent performance and minimized downtime.'
						className='sm:max-md:max-w-xs'
					/>

					<Image
						src='/images/benefits/benefits-support.png'
						alt=''
						width={600}
						height={600}
						className='absolute top-0 z-0 aspect-square size-[250px] max-h-none max-w-none -rotate-12 sm:max-md:right-4 lg:size-[300px]'
					/>
					<div className='absolute inset-0 z-10 size-full bg-gradient-to-t from-secondary from-25% to-secondary/0 sm:max-md:bg-gradient-to-r lg:opacity-0' />
				</Card>
				<Card className='pt-[250px] md:col-span-full md:row-[5/6] md:py-12 lg:col-[1/4] lg:row-[3/4]'>
					<CardHeading
						heading='Improved Efficiency'
						description='Experience faster response times and smooth workflows, designed to keep your systems running at peak performance without extra effort.'
						className='md:max-w-sm'
					/>

					<Image
						src='/images/benefits/image.png'
						alt=''
						width={800}
						height={600}
						className='absolute left-1/2 top-4 z-0 h-auto max-h-none w-[calc(100%-2rem)] max-w-md -translate-x-1/2 md:left-auto md:right-4 md:h-full md:w-auto md:translate-x-0'
					/>
					<div className='absolute inset-0 z-10 size-full bg-gradient-to-t from-secondary from-25% to-secondary/0 md:bg-gradient-to-r lg:max-w-2xl' />
				</Card>
				<Card className='flex flex-col items-center justify-center gap-y-3 py-6 md:col-[2/3] md:row-[2/3] lg:col-[4/5] lg:row-[1/2]'>
					<div className='relative z-10 flex w-max items-center justify-center rounded-full border-4 bg-gradient-primary p-8'>
						<Icons.Rocket className='size-12 text-primary-foreground' />
					</div>
					<h3 className='relative z-10 text-center font-semibold leading-[1.1] text-primary'>Launch Your SAP Now</h3>

					<div className="absolute z-0 size-full bg-[url('/images/benefits/perlin-contour.png')] opacity-10" />
				</Card>
			</div>
		</section>
	)
}

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return (
		<div className={cn('relative overflow-hidden rounded-2xl border bg-secondary p-4 md:p-6', className)}>
			{children}
		</div>
	)
}

const CardHeading = ({
	description,
	heading,
	className
}: {
	heading: string
	description: string
	className?: string
}) => {
	return (
		<div className={cn('relative z-20 space-y-2', className)}>
			<H3 className='text-secondary-foreground'>{heading}</H3>
			<p className='max-w-md text-muted-foreground'>{description}</p>
		</div>
	)
}
