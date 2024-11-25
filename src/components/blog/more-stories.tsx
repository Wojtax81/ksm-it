import { sanityFetch } from '@/sanity/lib/fetch';
import { moreStoriesQuery } from '@/sanity/lib/queries';
import { PostCard } from './post';

export default async function MoreStories(params: { skip: string; limit: number }) {
	const data = await sanityFetch({ query: moreStoriesQuery, params })

	return (
		<>
			<div className='mb-32 grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
				<div className='hidden' />
				{data?.map(post => (
					<PostCard key={post._id} post={post} />
				))}
			</div>
		</>
	)
}
