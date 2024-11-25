'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

type Props = {}

export const NotFoundClient = (props: Props) => {
	return (
		<main className='grid-container my-12 h-full grow md:my-24'>
			<div className='relative flex h-full w-full flex-col items-center justify-center'>
				<h1 className='font-heading lg:text-10xl xl:text-11xl 2xl:text-12xl my-6 text-center text-7xl uppercase sm:text-8xl md:text-9xl'>
					Not Found
				</h1>
				<h2 className='sr-only'>404</h2>
				<svg
					aria-hidden
					viewBox='0 0 15 13'
					className='font-heading absolute -z-20 w-[60%] min-w-72 fill-secondary uppercase opacity-10'>
					<text x='0' y='12'>
						404
					</text>
				</svg>
				<p className='max-w-md text-center text-lg leading-tight text-muted-foreground lg:text-xl'>
					We couldn&apos;t find the page you were looking for.
				</p>

				<div className='mt-12 flex w-full max-w-sm flex-col items-center gap-4 sm:flex-row sm:justify-center'>
					<Link href='/' className={cn(buttonVariants({ size: 'lg' }), 'max-sm:w-full')}>
						Go back home
					</Link>
				</div>
			</div>
		</main>
	)
}
