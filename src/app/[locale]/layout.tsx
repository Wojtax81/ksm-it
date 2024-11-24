import '../globals.css'

import LanguageChanger from '@/components/language-changer'
import { Footer } from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import { SVGGradientEmbeds } from '@/components/svg-gradient-embeds'
import { Toaster } from '@/components/ui/sonner'
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

				<Navbar />

				<div className='relative z-20 rounded-b-3xl bg-background shadow-[0_60px_80px_0px] shadow-foreground'>
					{children}
				</div>

				<div className='pointer-events-none relative -z-20 h-[680px] select-none md:h-[500px] lg:h-[600px]' />
				<Footer />

				{isDraftMode && <VisualEditing />}
				<Toaster />
				<SpeedInsights />
				<LanguageChanger className='fixed left-2 top-2 z-50 rounded-md border bg-white/50 px-2 py-1 backdrop-blur-sm' />
				<SVGGradientEmbeds />
			</body>
		</html>
	)
}
