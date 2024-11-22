import { ContactForm } from '@/components/contact-form'
import { SectionHeading } from '@/components/section-heading'
import H3 from '@/components/ui/typography/h3'
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'

type Props = {}

const CONTACT_DETAILS = [
	{
		Icon: PhoneIcon,
		title: 'Our Phone',
		contacts: ['06201 / 690 11 28', '0172 / 759 12 26']
	},
	{
		Icon: MailIcon,
		title: 'Our Email',
		contacts: ['info@ksmconsulting.de']
	},
	{
		Icon: MapPinIcon,
		title: 'Our Address',
		contacts: ['Hauptstr.78', '69514 Laudenbach']
	}
]

export const ContactSection = (props: Props) => {
	return (
		<section id='contact' className='scroll-m-20 py-16'>
			<SectionHeading
				align='center'
				heading='Take the First Step Towards Optimization'
				description='Contact us for a personalized consultation and see how we can transform your SAP environment.'
				badge={{
					text: 'Contact',
					Icon: MailIcon
				}}
				className='md:max-w-2xl lg:basis-1/2'
			/>

			<div className='my-12 grid gap-x-4 gap-y-2 lg:grid-cols-3'>
				{CONTACT_DETAILS.map((contact, index) => (
					<div
						key={index}
						className='relative flex flex-col items-center justify-center overflow-hidden rounded-xl border bg-gradient-primary px-6 py-12 text-primary-foreground'>
						<contact.Icon className='relative z-10 mb-6 size-16 fill-primary-foreground stroke-primary stroke-1' />

						<H3 className='relative z-10 mb-3'>{contact.title}</H3>
						<div className='relative z-10 text-center'>
							{contact.contacts.map((contact, i) => (
								<p key={i}>{contact}</p>
							))}
						</div>

						<div className='absolute -left-16 -top-16 z-0 size-64 rounded-full bg-black opacity-75 blur-[60px]' />
						<div className='absolute -bottom-16 -right-16 z-0 size-64 rounded-full bg-black opacity-75 blur-[50px]' />
					</div>
				))}
			</div>

			<div className='grid gap-x-16 gap-y-12 lg:grid-cols-2 xl:gap-x-24'>
				<ContactForm heading='Get In Touch' />
				<div className='rounded-2xl border bg-secondary'></div>
			</div>
		</section>
	)
}
