import { CogIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

// We have a type called pageMetadata that we can use to define the metadata for a page.
// Settings structure:
// Home:
//  - Metadata

// Blog:
//  - Metadata
//  - Heading
//  - Description

// Post:
//  - Metadata
//  - Recent Articles Heading

export default defineType({
	name: 'settings',
	title: 'Settings',
	type: 'document',
	icon: CogIcon,
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
			name: 'ogImage',
			title: 'Open Graph Image',
			type: 'image',
			description: 'Displayed on social cards and search engine results.',
			options: {
				hotspot: true,
				aiAssist: {
					imageDescriptionField: 'alt'
				}
			},
			fields: [
				defineField({
					name: 'alt',
					description: 'Important for accessibility and SEO.',
					title: 'Alternative text',
					type: 'string',
					validation: rule => {
						return rule.custom((alt, context) => {
							if ((context.document?.ogImage as any)?.asset?._ref && !alt) {
								return 'Required'
							}
							return true
						})
					}
				})
			]
		}),
		defineField({
			name: 'blog',
			title: 'Blog',
			type: 'object',
			fields: [
				defineField({
					name: 'metadata',
					title: 'Metadata',
					type: 'pageMetadata',
					validation: rule => rule.required()
				}),
				defineField({
					name: 'heading',
					title: 'Heading',
					type: 'string',
					validation: rule => rule.required()
				}),
				defineField({
					name: 'description',
					title: 'Description',
					type: 'text',
					validation: rule => rule.required()
				})
			],
			options: { collapsible: true }
		}),
		defineField({
			name: 'post',
			title: 'Blog Post',
			type: 'object',
			fields: [
				defineField({
					name: 'recentArticlesHeading',
					title: 'Recent Articles Heading',
					type: 'string',
					validation: rule => rule.required()
				})
			],
			options: { collapsible: true }
		})
	],
	preview: {
		select: {
			language: 'language'
		},
		prepare({ language }) {
			return {
				title: 'Settings',
				subtitle: language
			}
		}
	}
})
