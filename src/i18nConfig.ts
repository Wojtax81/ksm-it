const localesReadonlyArray = ['en', 'de'] as const
export type Locales = (typeof localesReadonlyArray)[number]

export const locales = localesReadonlyArray.concat()

export const i18nConfig = {
	locales: locales,
	defaultLocale: 'en'
}

type Language = {
	id: string
	title: string
	isDefault?: boolean
}

export const languages: Language[] = [
	{ id: 'en', title: 'English', isDefault: true },
	{ id: 'de', title: 'German' }
]
