import { defineField, defineType } from 'sanity'

import { HomeIcon } from 'lucide-react'

export default defineType({
	name: 'home',
	title: 'Home',
	type: 'document',
	icon: HomeIcon,
	fields: [
		defineField({
			name: 'language',
			type: 'string',
			readOnly: true,
			hidden: true
		}),
		defineField({
			name: 'hero',
			title: 'Hero section',
			type: 'object',
			fields: [
				{
					name: 'heading',
					type: 'string',
					title: 'Heading',
					validation: Rule => Rule.required()
				},
				{
					name: 'subtitle',
					title: 'Subtitle',
					type: 'string',
					validation: Rule => Rule.required()
				},
				{
					name: 'cta',
					title: 'CTA Button text',
					type: 'string',
					validation: Rule => Rule.required()
				},
				{
					name: 'badge',
					title: 'Badge',
					type: 'string',
					validation: Rule => Rule.required()
				},
				{
					name: 'trustedBy',
					title: 'Trusted by',
					type: 'string',
					validation: Rule => Rule.required()
				}
			],
			validation: Rule => Rule.required(),
			options: { collapsible: true, collapsed: false }
		})
	],
	preview: {
		select: {
			language: 'language'
		},
		prepare({ language }) {
			return {
				title: 'Home',
				subtitle: language
			}
		}
	}
})
