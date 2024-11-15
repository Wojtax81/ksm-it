import { Locales } from '@/i18nConfig'
import { sanityFetch } from '@/sanity/lib/fetch'
import { homeQuery } from '@/sanity/lib/queries'
import { HeroSection } from './components/sections/hero'

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

				{/* Our Services */}
			</div>

			{/* How It Works */}

			{/* Benefits */}

			{/* FAQ */}

			{/* Contact */}
		</main>
	)
}
