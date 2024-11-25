import { Locales } from '@/i18nConfig'
import { getDateLocale } from '@/lib/getDateLocale'
import { format } from 'date-fns'

export default async function DateComponent({ dateString, locale = 'en' }: { dateString: string; locale?: Locales }) {
	const dateLocale = getDateLocale(locale)

	return <time dateTime={dateString}>{format(new Date(dateString), 'LLLL	d, yyyy', { locale: dateLocale })}</time>
}
