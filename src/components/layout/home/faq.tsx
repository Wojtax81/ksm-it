import { FAQBlock } from '@/components/faq-block'
import { SectionHeading } from '@/components/section-heading'
import { sanityFetch } from '@/sanity/lib/fetch'
import { faqQuery } from '@/sanity/lib/queries'
import { MessageCircleQuestionIcon } from 'lucide-react'
import { DeepRequired } from 'react-hook-form'
import { Home } from '../../../../sanity.types'

type Props = {
	translations: DeepRequired<Home>['faq']
}

export const FAQSection = async ({ translations }: Props) => {
	const { sectionHeading } = translations
	const faqs = await sanityFetch({
		query: faqQuery,
		params: { language: 'en' }
	})

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
				<FAQBlock faqs={faqs as any} />
			</div>
		</section>
	)
}
