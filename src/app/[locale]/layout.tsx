import '../globals.css'

import { Footer } from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import Providers from '@/components/layout/providers'
import { siteConfig } from '@/config/site'
import { Locales, i18nConfig } from '@/i18nConfig'
import getIntl from '@/intl'
import { sanityFetch } from '@/sanity/lib/fetch'
import { settingsQuery } from '@/sanity/lib/queries'
import { resolveOpenGraphImage } from '@/sanity/lib/utils'
import type { Metadata } from 'next'
import { Sen } from 'next/font/google'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

const sen = Sen({
	subsets: ['latin-ext'],
	variable: '--font-sen',
	display: 'swap'
})

export async function generateMetadata({ params }: { params: Promise<{ locale: Locales }> }): Promise<Metadata> {
	const { locale } = await params

	const settings = await sanityFetch({
		query: settingsQuery,
		params: { language: locale },
		// Metadata should never contain stega
		stega: false
	})

	const metaTitle = settings?.metadata?.title || undefined
	const title = siteConfig.name
	const description = settings?.metadata?.description || undefined

	const ogImage = resolveOpenGraphImage(settings?.ogImage)

	return {
		title: {
			template: `%s | ${title}`,
			default: title
		},
		description: description,
		openGraph: {
			title: metaTitle ? `${metaTitle} | ${title}` : title,
			description: description,
			images: ogImage ? [ogImage] : []
		}
	}
}

// export function generateStaticParams() {
// 	return i18nConfig.locales.map(locale => ({ locale }))
// }

export default async function RootLayout({
	children,
	params
}: {
	children: React.ReactNode
	params: Promise<{ locale: Locales }>
}) {
	const { locale } = await params

	if (!i18nConfig.locales.includes(locale)) notFound()

	const intl = await getIntl(locale)
	const { isEnabled: isDraftMode } = await draftMode()

	return (
		<html lang='en' className={`${sen.variable}`}>
			<body>
				<Suspense>
					<Providers locale={locale} isDraftMode={isDraftMode} messages={intl.messages}>
						<Suspense>
							<Navbar />
						</Suspense>

						<div className='relative z-20 rounded-b-3xl bg-background shadow-[0_60px_80px_0px] shadow-foreground'>
							{children}
						</div>

						<Suspense>
							<Footer locale={locale} />
						</Suspense>
					</Providers>
				</Suspense>
			</body>
		</html>
	)
}
