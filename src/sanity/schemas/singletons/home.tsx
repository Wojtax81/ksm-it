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
		}),
		defineField({
			name: 'services',
			title: 'Services section',
			type: 'object',
			fields: [
				{
					name: 'sectionHeading',
					title: 'Section Heading',
					type: 'sectionHeading'
				},
				{
					name: 'cards',
					title: 'Cards',
					type: 'object',
					fields: [
						{
							name: 'basisConsulting',
							title: 'Basis Consulting',
							type: 'titleDescription'
						},
						{
							name: 's4Hana',
							title: 'S/4HANA',
							type: 'titleDescription'
						},
						{
							name: 'security',
							title: 'Security',
							type: 'titleDescription'
						}
					]
				}
			],
			validation: Rule => Rule.required(),
			options: { collapsible: true, collapsed: false }
		}),
		defineField({
			name: 'howItWorks',
			title: 'How It Works section',
			type: 'object',
			fields: [
				{
					name: 'sectionHeading',
					title: 'Section Heading',
					type: 'sectionHeading'
				},
				{
					name: 'cards',
					title: 'Cards',
					type: 'array',
					of: [
						{
							type: 'object',
							fields: [
								{
									name: 'title',
									title: 'Title',
									type: 'string',
									validation: Rule => Rule.required()
								},
								{
									name: 'description',
									title: 'Description',
									type: 'string',
									validation: Rule => Rule.required()
								},
								{
									name: 'image',
									title: 'Image',
									type: 'image',
									validation: Rule => Rule.required()
								}
							]
						}
					]
				}
			],
			validation: Rule => Rule.required(),
			options: { collapsible: true, collapsed: false }
		}),
		defineField({
			name: 'benefits',
			title: 'Benefits section',
			type: 'object',
			fields: [
				{
					name: 'sectionHeading',
					title: 'Section Heading',
					type: 'sectionHeading'
				},
				{
					name: 'bento',
					title: 'Bento',
					type: 'object',
					fields: [
						{
							name: 'security',
							title: 'Security',
							type: 'titleDescription'
						},
						{
							name: 'efficiency',
							title: 'Efficiency',
							type: 'titleDescription'
						},
						{
							name: 'scalability',
							title: 'Scalability',
							type: 'titleDescription'
						},
						{
							name: 'support',
							title: 'Support',
							type: 'titleDescription'
						},
						{
							name: 'cta',
							title: 'CTA Text',
							type: 'string',
							validation: Rule => Rule.required()
						}
					]
				}
			],
			validation: Rule => Rule.required(),
			options: { collapsible: true, collapsed: false }
		}),
		defineField({
			name: 'faq',
			title: 'FAQ section',
			type: 'object',
			fields: [
				{
					name: 'sectionHeading',
					title: 'Section Heading',
					type: 'sectionHeading'
				}
			],
			validation: Rule => Rule.required(),
			options: { collapsible: true, collapsed: false }
		}),
		defineField({
			name: 'contact',
			title: 'Contact section',
			type: 'object',
			fields: [
				{
					name: 'sectionHeading',
					title: 'Section Heading',
					type: 'sectionHeading'
				},
				{
					name: 'details',
					title: 'Details',
					type: 'object',
					fields: [
						{
							name: 'phone',
							title: 'Phone',
							type: 'object',
							fields: [
								{
									name: 'title',
									title: 'Title',
									type: 'string',
									validation: Rule => Rule.required()
								},
								{
									name: 'contacts',
									title: 'Contacts',
									type: 'array',
									of: [{ type: 'string' }],
									validation: Rule => Rule.required()
								}
							]
						},
						{
							name: 'email',
							title: 'Email',
							type: 'object',
							fields: [
								{
									name: 'title',
									title: 'Title',
									type: 'string',
									validation: Rule => Rule.required()
								},
								{
									name: 'contacts',
									title: 'Contacts',
									type: 'array',
									of: [{ type: 'string' }],
									validation: Rule => Rule.required()
								}
							]
						},
						{
							name: 'address',
							title: 'Address',
							type: 'object',
							fields: [
								{
									name: 'title',
									title: 'Title',
									type: 'string',
									validation: Rule => Rule.required()
								},
								{
									name: 'contacts',
									title: 'Contacts',
									type: 'array',
									of: [{ type: 'string' }],
									validation: Rule => Rule.required()
								}
							]
						}
					]
				},
				{
					name: 'form',
					title: 'Form',
					type: 'object',
					fields: [
						{
							name: 'title',
							title: 'Title',
							type: 'string'
						},
						{
							name: 'fields',
							title: 'Fields',
							type: 'object',
							fields: [
								{
									name: 'name',
									title: 'Name',
									type: 'object',
									fields: [
										{
											name: 'label',
											title: 'Label',
											type: 'string',
											validation: Rule => Rule.required()
										},
										{
											name: 'error',
											title: 'Error message',
											type: 'string',
											validation: Rule => Rule.required()
										}
									]
								},
								{
									name: 'phone',
									title: 'Phone',
									type: 'object',
									fields: [
										{
											name: 'label',
											title: 'Label',
											type: 'string',
											validation: Rule => Rule.required()
										},
										{
											name: 'error',
											title: 'Error message',
											type: 'string',
											validation: Rule => Rule.required()
										}
									]
								},
								{
									name: 'email',
									title: 'Email',
									type: 'object',
									fields: [
										{
											name: 'label',
											title: 'Label',
											type: 'string',
											validation: Rule => Rule.required()
										},
										{
											name: 'error',
											title: 'Error message',
											type: 'string',
											validation: Rule => Rule.required()
										}
									]
								},
								{
									name: 'message',
									title: 'Message',
									type: 'object',
									fields: [
										{
											name: 'label',
											title: 'Label',
											type: 'string',
											validation: Rule => Rule.required()
										},
										{
											name: 'error',
											title: 'Error message',
											type: 'string',
											validation: Rule => Rule.required()
										}
									]
								}
							]
						},
						{
							name: 'privacyPolicy',
							title: 'Privacy Policy note',
							type: 'string',
							description: "Text wrapped in '{}' will be linked to the Privacy Policy page",
							validation: Rule => Rule.required()
						},
						{
							name: 'submit',
							title: 'Submit Button text',
							type: 'string',
							validation: Rule => Rule.required()
						},
						{
							name: 'notification',
							title: 'Notifications',
							type: 'object',
							fields: [
								{
									name: 'success',
									title: 'Success message',
									type: 'string',
									validation: Rule => Rule.required()
								},
								{
									name: 'error',
									title: 'Error message',
									type: 'string',
									validation: Rule => Rule.required()
								}
							],
							options: { collapsible: true, collapsed: false }
						}
					]
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
