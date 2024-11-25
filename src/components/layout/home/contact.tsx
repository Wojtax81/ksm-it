import { ContactForm } from '@/components/contact-form'
import { SectionHeading } from '@/components/section-heading'
import H3 from '@/components/ui/typography/h3'
import { LucideIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'
import { DeepRequired } from 'react-hook-form'
import { Home } from '../../../../sanity.types'

type Props = {
	translations: DeepRequired<Home>['contact']
}

export const ContactSection = ({ translations }: Props) => {
	const { details, form, sectionHeading } = translations

	const DETAILS_ICON_ENUM: Record<keyof typeof details, LucideIcon> = {
		phone: PhoneIcon,
		email: MailIcon,
		address: MapPinIcon
	}

	return (
		<section id='contact' className='scroll-m-20 py-16'>
			<SectionHeading
				align='center'
				heading={sectionHeading.title}
				description={sectionHeading.description}
				badge={{
					text: sectionHeading.badge,
					Icon: MailIcon
				}}
				className='md:max-w-2xl lg:basis-1/2'
			/>

			<div className='my-12 grid gap-x-4 gap-y-2 lg:grid-cols-3'>
				{Object.entries(details).map(([key, contact], index) => {
					const Icon = DETAILS_ICON_ENUM[key as keyof typeof details]

					return (
						<div
							key={index}
							className='relative flex flex-col items-center justify-center overflow-hidden rounded-xl border bg-gradient-primary px-6 py-12 text-primary-foreground'>
							<Icon className='relative z-10 mb-6 size-16 fill-primary-foreground stroke-primary stroke-1' />
							<H3 className='relative z-10 mb-3'>{contact.title}</H3>
							<div className='relative z-10 text-center'>
								{contact.contacts.map((contact, i) => (
									<p key={i}>{contact}</p>
								))}
							</div>

							<div className='absolute -left-16 -top-16 z-0 size-64 rounded-full bg-black opacity-75 blur-[60px]' />
							<div className='absolute -bottom-16 -right-16 z-0 size-64 rounded-full bg-black opacity-75 blur-[50px]' />
						</div>
					)
				})}
			</div>

			<div className='grid gap-x-16 gap-y-12 lg:grid-cols-2 xl:gap-x-24'>
				<ContactForm heading={form.title} translations={form} />
				<div className='rounded-2xl border bg-secondary'></div>
			</div>
		</section>
	)
}
