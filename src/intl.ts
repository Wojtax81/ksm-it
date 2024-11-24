'server-only'

import { createIntl, createIntlCache } from '@formatjs/intl'
import { IntlShape } from 'react-intl'
import { Locales } from './i18nConfig'
import { getMessages } from './lib/getMessages'

const globalIntlCache = createIntlCache()

export default async function getIntl(locale: Locales): Promise<IntlShape> {
	const messages = await getMessages(locale)

	return createIntl(
		{
			locale: locale,
			messages: messages,
			defaultLocale: 'en'
		},
		globalIntlCache
	)
}
