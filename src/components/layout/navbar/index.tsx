'use client'

import LanguageChanger from '@/components/language-changer'
import { buttonVariants } from '@/components/ui/button'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Suspense } from 'react'
import Wordmark from '../../../../public/assets/brand/wordmark.svg'
import { useNavLinks } from './get-links'
import { MobileMenu } from './mobile-menu'

type Props = {}

const Navbar = ({}: Props) => {
	const layoutSegment = useSelectedLayoutSegment()
	const { y } = useScrollPosition()
	const isActive = y > 10

	const allLinks = useNavLinks('en')

	const links = allLinks.filter(link => !link.isCTA)
	const cta = allLinks.find(link => link.isCTA)

	return (
		<header className='grid-container fixed left-0 z-[49] w-full'>
			<nav
				className={cn(
					'relative flex h-16 items-center justify-between overflow-hidden border border-transparent px-0 py-4 duration-300',
					isActive && 'mt-2 rounded-full border-border/25 pl-8 pr-6 shadow-sm md:pr-2.5',
					layoutSegment === null ? 'text-primary-foreground' : 'text-foreground'
				)}>
				<div
					className={cn(
						'pointer-events-none absolute inset-0 -z-10 rounded-full bg-foreground/50 opacity-0 backdrop-blur-md duration-300',
						isActive && 'opacity-100'
					)}
				/>
				<Link href={'/'} className='z-50 w-max'>
					<Wordmark
						className={cn('h-8 w-auto lg:h-10', (layoutSegment === null || isActive) && 'text-primary-foreground')}
					/>
				</Link>

				<div className='flex items-center gap-x-4 md:hidden'>
					<Suspense>
						<LanguageChanger
							className={cn(
								'z-50 flex md:hidden',
								layoutSegment === null || isActive ? 'text-primary-foreground' : 'text-foreground'
							)}
						/>
					</Suspense>

					<MobileMenu isNavActive={isActive} links={links} />
				</div>

				<ul
					className={cn(
						'lg:absolute-center hidden items-center justify-center gap-4 md:flex xl:gap-8',
						layoutSegment === null || isActive ? 'text-primary-foreground' : 'text-foreground'
					)}>
					{links.map((link, i) => (
						<li key={link.href}>
							<Link href={link.href} className='py-0.5 hover:underline md:text-sm lg:text-base'>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
				<div className='hidden items-center gap-x-6 md:flex'>
					<Suspense>
						<LanguageChanger
							className={cn(
								'z-50 hidden md:flex',
								layoutSegment === null || isActive ? 'text-primary-foreground' : 'text-foreground'
							)}
						/>
					</Suspense>

					{cta && (
						<Link
							href={cta?.href}
							className={cn(
								buttonVariants({
									variant: layoutSegment === null && !isActive ? 'secondaryGradient' : 'primaryGradient'
								}),
								'hidden md:flex'
							)}>
							<span>{cta?.label}</span>
						</Link>
					)}
				</div>
			</nav>
		</header>
	)
}

export default Navbar
