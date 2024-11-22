'use client'

import { buttonVariants } from '@/components/ui/button'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { cn } from '@/lib/utils'
import { ListOrderedIcon, MailIcon, NewspaperIcon, PackageOpenIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MobileMenu } from './mobile-menu'

export const NAV_LINKS = [
	{ label: 'Services', href: '/#services', Icon: PackageOpenIcon },
	{ label: 'How It Works', href: '/#how-it-works', Icon: ListOrderedIcon },
	{ label: 'Contact', href: '/#contact', Icon: MailIcon },
	{ label: 'Blog', href: '/blog', Icon: NewspaperIcon }
]

type Props = {}

const Navbar = ({}: Props) => {
	const pathname = usePathname()
	const { y } = useScrollPosition()

	const isActive = y > 10

	return (
		<header className='grid-container fixed left-0 z-[49] w-full'>
			<nav
				className={cn(
					'relative flex h-16 items-center justify-between overflow-hidden border border-transparent px-0 py-4 duration-300',
					isActive && 'mt-2 rounded-full border-border/25 pl-8 pr-6 shadow-sm md:pr-2.5',
					pathname === '/' ? 'text-primary-foreground' : 'text-foreground'
				)}>
				<div
					className={cn(
						'pointer-events-none absolute inset-0 -z-10 rounded-full bg-foreground/50 opacity-0 backdrop-blur-md duration-300',
						isActive && 'opacity-100'
					)}
				/>
				<Link href={'/'} className='z-50 w-max'>
					<Image
						src={'/assets/brand/wordmark.svg'}
						alt='Logo KSM IT Solutions'
						width={500}
						height={500}
						priority
						className={cn('h-6 w-auto max-w-full duration-300 sm:h-8', (pathname === '/' || isActive) && 'invert')}
					/>
				</Link>

				<MobileMenu isNavActive={isActive} />

				<ul
					className={cn(
						'absolute-center hidden items-center justify-center gap-8 md:flex',
						pathname === '/' || isActive ? 'text-primary-foreground' : 'text-foreground'
					)}>
					{NAV_LINKS.map((link, i) => (
						<li key={link.href}>
							<Link href={link.href} className='py-0.5 hover:underline'>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
				<Link
					href={'/#contact'}
					className={cn(buttonVariants({ variant: 'secondaryGradient' }), 'hidden border md:flex')}>
					<span>Boost Your System</span>
				</Link>
			</nav>
		</header>
	)
}

export default Navbar
