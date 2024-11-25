import { Locales } from '@/i18nConfig'
import { type Locale } from 'date-fns'
import { enUS } from 'date-fns/locale'

let allLocales: {
	[key: string]: Locale
}

import('date-fns/locale').then(locales => {
	const { ...filteredLocales } = locales
	allLocales = filteredLocales
})

export const getDateLocale = (l: Locales) => {
	if (!allLocales) return enUS

	l = l === 'en' ? 'enUS' : (l as any)

	const locale = l.replace('-', '')
	const rootLocale = locale.substring(0, 2)

	return allLocales[locale] || allLocales[rootLocale]
}
