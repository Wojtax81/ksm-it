import CustomPortableText from '@/components/portable-text'
import { Locales } from '@/i18nConfig'
import { generateAlternates } from '@/lib/utils'
import { sanityFetch } from '@/sanity/lib/fetch'
import { privacyPolicyQuery } from '@/sanity/lib/queries'
import { Metadata } from 'next'
import { Suspense } from 'react'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locales }> }) {
	const { locale } = await params

	const privacyPolicy = await sanityFetch({
		query: privacyPolicyQuery,
		params: { language: locale }
	})

	const { metadata } = privacyPolicy || {}

	return {
		title: metadata?.title,
		description: metadata?.description,
		alternates: generateAlternates('/privacy-policy'),
		robots: {
			index: false,
			follow: false
		}
	} satisfies Metadata
}

export default async function PolicyPrivacyPage({ params }: { params: Promise<{ locale: Locales }> }) {
	const { locale } = await params

	const privacyPolicy = await sanityFetch({
		query: privacyPolicyQuery,
		params: { language: locale }
	})

	return (
		<main className='grid-container py-32'>
			<Suspense>{privacyPolicy && <CustomPortableText value={privacyPolicy?.body as any} />}</Suspense>
		</main>
	)
}
