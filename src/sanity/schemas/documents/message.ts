import { Languages } from 'lucide-react'
import { defineType } from 'sanity'

export default defineType({
	name: 'message',
	title: 'Translation Messages',
	icon: Languages,
	type: 'document',
	fields: [
		{
			name: 'description',
			title: 'Description',
			type: 'string'
		},
		{
			name: 'key',
			title: 'System Key',
			type: 'string'
		},
		{
			name: 'value',
			title: 'Value',
			type: 'internationalizedArrayString'
		}
	],
	preview: {
		select: {
			title: 'description',
			subtitle: 'value.en'
		}
	}
})
