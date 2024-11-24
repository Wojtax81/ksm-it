import { HelpCircle } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export default defineType({
	title: 'Frequently asked questions',
	name: 'faq',
	type: 'document',
	icon: HelpCircle,
	fields: [
		defineField({
			title: 'Question',
			name: 'question',
			type: 'internationalizedArrayString',
			validation: Rule => Rule.required()
		}),
		defineField({
			title: 'Answer',
			name: 'answer',
			type: 'internationalizedArrayFaqAnswer',
			validation: Rule => Rule.required()
		})
	],
	preview: {
		select: {
			title: 'question.0.value',
			subtitle: 'answer.0.value'
		}
	}
})
