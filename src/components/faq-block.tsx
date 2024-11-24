import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import { AccordionSingleProps } from '@radix-ui/react-accordion'
import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

type Props = Omit<AccordionSingleProps, 'type'> & {
	faqs: {
		question: string
		answer: any
	}[]
}

const components: Partial<PortableTextReactComponents> = {
	list: {
		bullet: ({ children }) => (
			<ul className='prose prose-invert my-2.5 list-inside list-disc text-sm text-muted-foreground marker:text-muted-foreground'>
				{children}
			</ul>
		),
		number: ({ children }) => (
			<ol className='prose prose-invert my-2.5 list-inside list-decimal text-sm text-muted-foreground marker:text-muted-foreground'>
				{children}
			</ol>
		)
	},
	marks: {
		link: ({ value, children }) => {
			const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
			return (
				<Link
					href={value?.href}
					target={target}
					rel={target === '_blank' ? 'noopener' : undefined}
					className='font-semibold hover:underline'>
					{children}
				</Link>
			)
		}
	}
}

export const FAQBlock = ({ faqs, defaultValue = '0', ...props }: Props) => {
	return (
		<Accordion collapsible defaultValue={defaultValue} type='single' {...props}>
			{faqs?.map((faq, i) => (
				<AccordionItem key={i} value={`${i}`} className='last:border-transparent'>
					<AccordionTrigger className='py-6'>{faq.question}</AccordionTrigger>
					<AccordionContent className='max-w-prose pr-4 text-sm'>
						<PortableText value={faq.answer} components={components} />
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
