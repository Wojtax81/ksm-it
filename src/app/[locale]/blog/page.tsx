import { PostCard } from '@/components/blog/post'
import H1 from '@/components/ui/typography/h1'
import { Locales } from '@/i18nConfig'
import { generateAlternates } from '@/lib/utils'
import { sanityFetch } from '@/sanity/lib/fetch'
import { allPostsQuery, settingsQuery } from '@/sanity/lib/queries'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
	params: Promise<{ locale: Locales }>
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	const { locale } = await params

	const settings = await sanityFetch({
		query: settingsQuery,
		params: { language: locale },
		// Metadata should never contain stega
		stega: false
	})

	const { blog } = settings || {}

	return {
		title: blog?.metadata?.title || 'Blog',
		description: blog?.metadata?.description || '',
		alternates: generateAlternates('/blog')
	} satisfies Metadata
}

export default async function BlogPage({ params }: Props) {
	const { locale } = await params

	const [posts, settings] = await Promise.all([
		sanityFetch({ query: allPostsQuery }),
		sanityFetch({ query: settingsQuery, params: { language: locale } })
	])

	if (!posts || !posts?.length) return notFound()

	return (
		<main className='grid-container py-24'>
			<div className='mb-24 mt-6'>
				<H1>{settings?.blog?.heading || 'Blog'}</H1>
				<p className='mt-6 max-w-prose text-muted-foreground'>{settings?.blog?.description || ''}</p>
			</div>

			<div className='mb-32 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6'>
				{posts?.map(post => {
					return <PostCard key={post._id} post={post} />
				})}
			</div>
		</main>
	)
}
