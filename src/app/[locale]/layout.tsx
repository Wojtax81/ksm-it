import '../globals.css'

import { Locales, i18nConfig } from '@/i18nConfig'
import * as demo from '@/sanity/lib/demo'
import { sanityFetch } from '@/sanity/lib/fetch'
import { settingsQuery } from '@/sanity/lib/queries'
import { resolveOpenGraphImage } from '@/sanity/lib/utils'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { VisualEditing, toPlainText } from 'next-sanity'
import { Sen } from 'next/font/google'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import AlertBanner from '../../components/alert-banner'
import LanguageChanger from '@/components/language-changer'

export async function generateMetadata(): Promise<Metadata> {
	const settings = await sanityFetch({
		query: settingsQuery,
		// Metadata should never contain stega
		stega: false
	})
	const title = settings?.title || demo.title
	const description = settings?.description || demo.description

	const ogImage = resolveOpenGraphImage(settings?.ogImage)
	let metadataBase: URL | undefined = undefined
	try {
		metadataBase = settings?.ogImage?.metadataBase ? new URL(settings.ogImage.metadataBase) : undefined
	} catch {
		// ignore
	}
	return {
		metadataBase,
		title: {
			template: `%s | ${title}`,
			default: title
		},
		description: toPlainText(description),
		openGraph: {
			images: ogImage ? [ogImage] : []
		}
	}
}

const sen = Sen({
	subsets: ['latin-ext'],
	variable: '--font-sen',
	display: 'swap'
})

export default async function RootLayout({
	children,
	params
}: {
	children: React.ReactNode
	params: { locale: Locales }
}) {
	const { locale } = await params

	if (!i18nConfig.locales.includes(locale)) notFound()

	const data = await sanityFetch({ query: settingsQuery })
	const { isEnabled: isDraftMode } = await draftMode()

	return (
		<html lang='en' className={`${sen.variable}`}>
			<body>
				{isDraftMode && <AlertBanner />}

				{children}

				{isDraftMode && <VisualEditing />}
				<SpeedInsights />

				<LanguageChanger className='fixed top-2 left-2 bg-white/50 border rounded-md px-2 py-1 backdrop-blur-sm' />
			</body>
		</html>
	)
}
