import { defineField } from 'sanity'

export default defineField({
	title: 'Answer',
	name: 'faqAnswer',
	type: 'array',
	of: [
		{
			title: 'Block',
			type: 'block',
			styles: [{ title: 'Normal', value: 'normal' }],
			lists: [
				{ title: 'Bullet', value: 'bullet' },
				{ title: 'Number', value: 'number' }
			],
			marks: {
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' }
				]
			}
		}
	],
	validation: Rule => Rule.required()
})
