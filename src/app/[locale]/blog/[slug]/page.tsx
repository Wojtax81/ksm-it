import MoreStories from '@/components/blog/more-stories'
import { PlaceholderImage } from '@/components/placeholder-image'
import { StructuredData } from '@/components/structured-data'
import H2 from '@/components/ui/typography/h2'
import { Locales } from '@/i18nConfig'
import { generateBlogPostStructuredData } from '@/lib/structuredData'
import { generateAlternates } from '@/lib/utils'
import { sanityFetch } from '@/sanity/lib/fetch'
import { postQuery, settingsQuery } from '@/sanity/lib/queries'
import { resolveOpenGraphImage, urlForImage } from '@/sanity/lib/utils'
import type { Metadata, ResolvingMetadata } from 'next'
import { defineQuery, type PortableTextBlock } from 'next-sanity'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import DateComponent from '../../../../components/date'
import PortableText from '../../../../components/portable-text'

type Props = {
	params: Promise<{ slug: string; locale: Locales }>
}

const postSlugs = defineQuery(`*[_type == "post" && defined(slug.current)]{"slug": slug.current}`)

export async function generateStaticParams() {
	return await sanityFetch({
		query: postSlugs,
		perspective: 'published',
		stega: false
	})
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	const { slug } = await params

	const post = await sanityFetch({
		query: postQuery,
		params: { slug },
		stega: false
	})
	const previousImages = (await parent).openGraph?.images || []
	const ogImage = resolveOpenGraphImage(post?.coverImage)

	return {
		authors: post?.author?.name ? [{ name: post?.author?.name }] : [],
		title: post?.title,
		description: post?.excerpt,
		openGraph: {
			images: ogImage ? [ogImage, ...previousImages] : previousImages
		},
		alternates: generateAlternates(`/blog/${post?.slug}`)
	} satisfies Metadata
}

export default async function PostPage({ params }: Props) {
	const { locale, slug } = await params

	const [post, settings] = await Promise.all([
		sanityFetch({ query: postQuery, params: { slug } }),
		sanityFetch({ query: settingsQuery, params: { language: locale } })
	])

	if (!post?._id) {
		return notFound()
	}

	return (
		<main className='grid-container pt-24 md:pt-32'>
			<StructuredData data={generateBlogPostStructuredData(post as any)} />
			<article>
				<div className='mb-4 text-base'>
					<DateComponent dateString={post.date} locale={locale} />
				</div>

				<h1 className='mb-12 text-balance text-4xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-7xl md:leading-none lg:text-8xl'>
					{post.title}
				</h1>

				<div className='mb-8 aspect-[4/3] h-auto w-full overflow-hidden rounded-3xl border sm:mx-0 md:mb-16 md:aspect-[2/1]'>
					{post.coverImage?.asset?._ref ? (
						<Image
							className='size-full object-cover'
							width={1400}
							height={800}
							alt={post.coverImage?.alt || ''}
							src={urlForImage(post.coverImage)?.height(800).width(1400).quality(100).url() as string}
							priority
						/>
					) : (
						<PlaceholderImage className='size-full' />
					)}
				</div>

				{post.content?.length && (
					<PortableText className='mx-auto max-w-2xl' value={post.content as PortableTextBlock[]} />
				)}
			</article>
			<aside>
				<hr className='border-accent-2 mb-24 mt-28' />
				<H2 className='mb-8'>{settings?.post?.recentArticlesHeading || 'Recent Articles'}</H2>
				<Suspense>
					<MoreStories skip={post._id} limit={3} />
				</Suspense>
			</aside>
		</main>
	)
}
