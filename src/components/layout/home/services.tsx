import { SectionHeading } from '@/components/section-heading'
import H3 from '@/components/ui/typography/h3'
import { PackageOpenIcon } from 'lucide-react'
import { DeepRequired } from 'react-hook-form'
import PerformanceSVG from '../../../../public/assets/performance.svg'
import ServerProtectionSVG from '../../../../public/assets/server-protection.svg'
import ServersGroupSVG from '../../../../public/assets/servers-group.svg'
import { Home } from '../../../../sanity.types'

type Props = {
	translations: DeepRequired<Home>['services']
}

export const ServicesSection = ({ translations }: Props) => {
	const { cards, sectionHeading } = translations

	const images: { id: keyof typeof cards; image: any }[] = [
		{
			id: 'basisConsulting',
			image: ServersGroupSVG
		},
		{
			id: 's4Hana',
			image: PerformanceSVG
		},
		{
			id: 'security',
			image: ServerProtectionSVG
		}
	]

	const services = images.map(img => {
		const content = cards[img.id]

		return {
			...content,
			image: img.image
		}
	})

	return (
		<section id='services' className='scroll-m-20 space-y-12 py-16'>
			<SectionHeading
				align='center'
				heading={sectionHeading.title}
				description={sectionHeading.description}
				badge={{
					text: sectionHeading.badge,
					Icon: PackageOpenIcon,
					variant: 'default'
				}}
				className='[&>h2]:text-primary-foreground [&>p]:text-primary-foreground'
			/>

			<div className='grid gap-4 lg:grid-cols-3'>
				{services.map((service, i) => (
					<ServiceCard key={i} {...service} CardImg={service.image} />
				))}
			</div>
		</section>
	)
}

type ServiceCardProps = {
	title: string
	description: string
	CardImg: any
}

const ServiceCard = ({ title, description, CardImg }: ServiceCardProps) => {
	return (
		<div className='relative z-0 flex h-[300px] flex-col items-start justify-end overflow-hidden rounded-2xl border bg-background p-6 sm:h-auto sm:px-8 sm:py-12 lg:h-[300px] lg:p-6'>
			<div className='relative z-20 w-full max-w-md space-y-1 text-foreground sm:max-w-xs md:max-w-sm'>
				<H3 className='text-xl md:text-2xl'>{title}</H3>
				<p className='text-sm leading-snug md:text-base'>{description}</p>
			</div>
			<div className='absolute bottom-0 z-0 aspect-square h-auto w-[300px] max-w-[calc(100%-2rem)] translate-y-6 sm:right-8 sm:w-[200px] md:right-12 md:w-[250px] md:max-lg:translate-y-12 lg:left-1/2 lg:right-auto lg:w-[300px] lg:-translate-x-1/2'>
				<CardImg width='100%' height='100%' />
			</div>
			<div className='absolute inset-0 z-10 size-full bg-gradient-to-t from-background from-15% to-background/0' />
		</div>
	)
}
