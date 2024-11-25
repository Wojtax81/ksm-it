import { siteConfig } from '@/config/site'
import { Locales } from '@/i18nConfig'
import { fallbackTranslations } from '@/lib/fallbackContent'
import { generateAlternates } from '@/lib/utils'
import { sanityFetch } from '@/sanity/lib/fetch'
import { homeQuery, settingsQuery } from '@/sanity/lib/queries'
import { Metadata } from 'next'
import { BenefitsSection } from '../../components/layout/home/benefits'
import { ContactSection } from '../../components/layout/home/contact'
import { FAQSection } from '../../components/layout/home/faq'
import { HeroSection } from '../../components/layout/home/hero'
import { HowItWorksSection } from '../../components/layout/home/how-it-works'
import { ServicesSection } from '../../components/layout/home/services'

type Props = {
	params: Promise<{ locale: Locales }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params

	const settings = await sanityFetch({
		query: settingsQuery,
		params: { language: locale },
		// Metadata should never contain stega
		stega: false
	})

	return {
		title: `${settings?.metadata?.title} | ${siteConfig.name}`,
		description: settings?.metadata?.description || undefined,
		alternates: generateAlternates('/')
	}
}

export default async function Page({ params }: Props) {
	const { locale } = await params

	const home = await sanityFetch({
		query: homeQuery,
		params: { language: locale }
	})

	if (!home?._id) {
		return <p>There was a problem</p>
	}

	const content = fallbackTranslations('home', home)

	return (
		<main className='grid-container min-h-screen overflow-hidden'>
			<div className='container-fill grid-container overflow-hidden bg-gradient-primary'>
				<HeroSection translations={content.hero} />

				<ServicesSection translations={content.services} />
			</div>

			<HowItWorksSection translations={content.howItWorks} />

			<BenefitsSection translations={content.benefits} />

			<FAQSection translations={content.faq} />

			<ContactSection translations={content.contact} />
		</main>
	)
}
