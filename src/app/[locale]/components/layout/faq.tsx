import { SectionHeading } from '@/components/section-heading'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { MessageCircleQuestionIcon } from 'lucide-react'
import { DeepRequired } from 'react-hook-form'
import { Home } from '../../../../../sanity.types'

type Props = {
	translations: DeepRequired<Home>['faq']
}

const TEMP_FAQ = {
	question: 'Lorem ipsum dolor sit amet?',
	answer:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies aliquet. Nullam nec purus nec libero'
}

export const FAQSection = ({ translations }: Props) => {
	const { sectionHeading } = translations

	return (
		<section className='flex flex-col justify-between gap-x-16 gap-y-12 py-16 lg:flex-row'>
			<SectionHeading
				align='left'
				heading={sectionHeading.title}
				description={sectionHeading.description}
				badge={{
					text: sectionHeading.badge,
					Icon: MessageCircleQuestionIcon
				}}
				className='lg:basis-1/2'
			/>

			<div className='max-w-2xl grow rounded-2xl border bg-secondary px-4 lg:max-w-xl lg:basis-1/2'>
				<Accordion type='single' collapsible>
					{Array(5)
						.fill(TEMP_FAQ)
						.map((faq, index) => (
							<AccordionItem key={index} value={`item-${index}`} className='last:border-transparent'>
								<AccordionTrigger className='py-6'>{faq.question}</AccordionTrigger>
								<AccordionContent>{faq.answer}</AccordionContent>
							</AccordionItem>
						))}
				</Accordion>
			</div>
		</section>
	)
}
