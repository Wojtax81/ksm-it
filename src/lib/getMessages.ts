import { Locales } from '@/i18nConfig'
import { sanityFetch } from '@/sanity/lib/fetch'
import { messagesQuery } from '@/sanity/lib/queries'

export const getMessages = async (lang: Locales) => {
	if (!lang) return {}

	const results: {
		key: string | null
		value: string | null
	}[] = await sanityFetch({
		query: messagesQuery,
		params: { language: lang }
	})

	const messages: { [key: string]: string } = {}
	results.forEach(message => {
		if (message.key) messages[message.key] = message.value || ''
	})

	return messages
}
