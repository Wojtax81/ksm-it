import { Home } from '../../sanity.types'

const homeFallback: Required<Pick<Home, 'hero'>> = {
	hero: {
		heading: 'Hero',
		subtitle: 'Description',
		badge: 'Badge',
		cta: 'CTA',
		trustedBy: 'Trusted by'
	}
}

export const fallbackContent = {
	home: homeFallback
}
