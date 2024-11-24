import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'sectionHeading',
	title: 'Section Heading',
	type: 'object',
	preview: { select: { title: 'title', subtitle: 'badge' } },
	fields: [
		defineField({
			name: 'badge',
			title: 'Badge title',
			type: 'string',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			validation: rule => rule.required().max(255)
		})
	],
	options: { collapsible: true, collapsed: false }
})
