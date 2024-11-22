import { Locales } from '@/i18nConfig'
import { sanityFetch } from '@/sanity/lib/fetch'
import { homeQuery } from '@/sanity/lib/queries'
import { HeroSection } from './components/layout/hero'
import { ServicesSection } from './components/layout/services'
import { HowItWorksSection } from './components/layout/how-it-works'
import { FAQSection } from './components/layout/faq'
import { ContactSection } from './components/layout/contact'
import { BenefitsSection } from './components/layout/benefits'

type Props = {
	params: { locale: Locales }
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

	return (
		<main className='grid-container min-h-screen'>
			<div className='container-fill grid-container overflow-hidden bg-gradient-primary'>
				<HeroSection translations={home.hero} />

				<ServicesSection />
			</div>

			<HowItWorksSection />

			<BenefitsSection />

			<FAQSection />

			<ContactSection />
		</main>
	)
}
