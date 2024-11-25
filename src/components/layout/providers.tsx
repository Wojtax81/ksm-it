'use client'

import { Locales } from '@/i18nConfig'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { VisualEditing } from 'next-sanity'
import { IntlProvider, MessageFormatElement } from 'react-intl'
import { SVGGradientEmbeds } from '../svg-gradient-embeds'
import { Toaster } from '../ui/sonner'
import AlertBanner from '../alert-banner'
import { Suspense } from 'react'

type Props = {
	messages: Record<string, string> | Record<string, MessageFormatElement[]> | undefined
	children: React.ReactNode
	locale: Locales
	isDraftMode: boolean
}

const Providers = ({ children, locale, messages, isDraftMode }: Props) => {
	return (
		<IntlProvider messages={messages} locale={locale}>
			{isDraftMode && <AlertBanner />}

			{children}

			{isDraftMode && <VisualEditing zIndex={70} />}
			<Toaster />
			<SpeedInsights />
			<SVGGradientEmbeds />
		</IntlProvider>
	)
}

export default Providers
