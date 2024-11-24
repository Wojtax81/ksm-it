'use client'

import { Locales } from '@/i18nConfig'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { VisualEditing } from 'next-sanity'
import { IntlProvider, MessageFormatElement } from 'react-intl'
import LanguageChanger from '../language-changer'
import { SVGGradientEmbeds } from '../svg-gradient-embeds'
import { Toaster } from '../ui/sonner'

type Props = {
	messages: Record<string, string> | Record<string, MessageFormatElement[]> | undefined
	children: React.ReactNode
	locale: Locales
	isDraftMode: boolean
}

const Providers = ({ children, locale, messages, isDraftMode }: Props) => {
	return (
		<IntlProvider messages={messages} locale={locale}>
			{isDraftMode && <VisualEditing zIndex={70} />}

			{children}

			<Toaster />
			<SpeedInsights />
			<LanguageChanger className='fixed left-2 top-2 z-50 rounded-md border bg-white/50 px-2 py-1 backdrop-blur-sm' />
			<SVGGradientEmbeds />
		</IntlProvider>
	)
}

export default Providers
