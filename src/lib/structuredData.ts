import { siteConfig } from '@/config/site'
import { urlForImage } from '@/sanity/lib/utils'
import { BlogPosting, Organization, WithContext } from 'schema-dts'
import { Post } from '../../sanity.types'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const OrganisationSchema = (): WithContext<Organization> => {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: siteConfig.name,
		url: BASE_URL,
		founder: {
			'@type': 'Person',
			name: 'Wojtek Krettek'
		},
		email: siteConfig.email
	}
}

export const generateBlogPostStructuredData = (
	post: Pick<Post, 'title' | 'coverImage' | 'excerpt' | 'date' | 'slug'>
): WithContext<BlogPosting> => {
	const organisation = OrganisationSchema()

	const image = post.coverImage ? urlForImage(post.coverImage)?.url() : undefined

	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.excerpt,
		url: `${BASE_URL}/blog/${post.slug}`,
		image: image,
		datePublished: post.date ?? undefined,
		publisher: organisation
	}
}
