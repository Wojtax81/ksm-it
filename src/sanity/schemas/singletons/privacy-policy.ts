import { ShieldQuestion } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export default defineType({
	title: 'Privacy Policy',
	name: 'privacyPolicy',
	type: 'document',
	icon: ShieldQuestion,
	fields: [
		defineField({
			name: 'language',
			type: 'string',
			readOnly: true,
			hidden: true
		}),
		defineField({
			name: 'metadata',
			title: 'Metadata',
			type: 'pageMetadata',
			validation: rule => rule.required()
		}),
		defineField({
			title: 'Body',
			name: 'body',
			type: 'array',
			of: [
				{
					type: 'block',
					// Only allow these block styles
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'H1', value: 'h1' },
						{ title: 'H2', value: 'h2' },
						{ title: 'H3', value: 'h3' },
						{ title: 'Quote', value: 'blockquote' }
					],
					// Only allow numbered lists
					lists: [
						{ title: 'Numbered', value: 'number' },
						{ title: 'Bullet', value: 'bullet' }
					],
					marks: {
						// Only allow these decorators
						decorators: [
							{ title: 'Strong', value: 'strong' },
							{ title: 'Emphasis', value: 'em' }
						]
					}
				}
			]
		})
	],
	preview: {
		select: {
			subtitle: 'language'
		},
		prepare({ subtitle }) {
			return {
				title: 'Privacy policy',
				subtitle: `${subtitle.toUpperCase()}`
			}
		}
	}
})
