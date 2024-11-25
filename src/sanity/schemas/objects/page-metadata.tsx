import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'pageMetadata',
	title: 'Page Metadata',
	type: 'object',
	preview: { select: { title: 'title', subtitle: 'description' } },
	fields: [
		defineField({
			name: 'title',
			title: 'Page Title',
			description: 'Appears in the browser tab and search results.',
			type: 'string',
			validation: rule => rule.required()
		}),
		defineField({
			name: 'description',
			description: 'Appears in search results.',
			title: 'Description',
			type: 'text',
			validation: rule => rule.min(50).max(200)
		})
	]
})
