import { urlForImage } from '@/sanity/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { AllPostsQueryResult, Post } from '../../../sanity.types'
import DateComponent from '../date'
import { PlaceholderImage } from '../placeholder-image'

type Props = {
	post: AllPostsQueryResult[number] | Post
}

export const PostCard = ({ post }: Props) => {
	const { _id, title, slug, coverImage, excerpt } = post

	return (
		<article
			key={_id}
			className='group relative z-0 flex h-full flex-col md:first:justify-end md:first:p-6 lg:first:col-span-2 lg:first:row-span-2 xl:first:p-8'>
			<Link
				href={`/blog/${slug}`}
				className='-z-10 mb-4 block aspect-[4/3] h-auto w-full overflow-hidden rounded-2xl group-first:inset-0 md:group-first:absolute md:group-first:size-full'>
				{coverImage?.asset?._ref ? (
					<Image
						className='size-full object-cover'
						width={1000}
						height={1000}
						alt={coverImage?.alt || ''}
						src={urlForImage(coverImage)?.height(1000).width(1000).url() as string}
					/>
				) : (
					<PlaceholderImage className='size-full' />
				)}

				<div className='absolute inset-0 hidden size-full bg-gradient-to-t from-black/50 from-25% to-black/0 md:group-first:block' />
			</Link>
			{post.date && (
				<div className='mb-1 text-xs text-muted-foreground md:group-first:text-background/80 lg:group-first:mb-2 lg:group-first:text-sm'>
					<DateComponent dateString={post.date} />
				</div>
			)}
			<h3
				title={title}
				className='mb-2 line-clamp-2 text-balance text-xl font-semibold md:group-first:text-background lg:group-first:mb-2.5 lg:group-first:text-2xl xl:group-first:text-3xl'>
				<Link href={`/blog/${slug}`} className='hover:underline'>
					{title}
				</Link>
			</h3>
			{excerpt && (
				<p className='line-clamp-2 text-pretty text-sm leading-relaxed text-muted-foreground md:group-first:text-background/80 lg:group-first:text-base'>
					{excerpt}
				</p>
			)}
		</article>
	)
}
