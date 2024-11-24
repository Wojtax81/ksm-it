import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'titleDescription',
	title: 'Title and description',
	type: 'object',
	preview: { select: { title: 'title', subtitle: 'description' } },
	fields: [
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
