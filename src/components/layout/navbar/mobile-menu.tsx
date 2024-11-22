'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { siteConfig } from '@/config/site'
import { Squeeze as Hamburger } from 'hamburger-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { NAV_LINKS } from '.'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export const MobileMenu = ({ isNavActive }: { isNavActive: boolean }) => {
	const mdBreakpoint = useMediaQuery('(min-width: 768px)')
	const pathname = usePathname()

	const [isMd, setIsMd] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		setIsMd(mdBreakpoint)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mdBreakpoint])

	if (isMd) return null

	return (
		<>
			<Sheet open={isOpen} onOpenChange={open => setIsOpen(open)}>
				<SheetTrigger asChild>
					<div
						className={cn(
							'z-50 md:hidden',
							pathname === '/' || isNavActive ? 'text-primary-foreground' : 'text-foreground'
						)}>
						<Hamburger toggled={isOpen} toggle={toggle => setIsOpen(toggle)} size={24} label='Open menu' rounded />
					</div>
				</SheetTrigger>
				<SheetContent side={'left'} className='flex flex-col'>
					<SheetHeader>
						<SheetTitle>
							<Link href={'/'} className='w-max'>
								<Image
									src={'/assets/brand/wordmark.svg'}
									alt='Logo KSM IT Solutions'
									width={500}
									height={500}
									priority
									className='h-6 w-auto max-w-full sm:h-8'
								/>
							</Link>
						</SheetTitle>
					</SheetHeader>

					<div className='mt-12 flex flex-col gap-2'>
						{NAV_LINKS.map((link, index) => (
							<React.Fragment key={index}>
								<Link
									onClick={() => setIsOpen(false)}
									href={link.href}
									className='group flex items-center gap-4 rounded-md py-2 duration-300 hover:bg-secondary'>
									<link.Icon className='h-5 w-5 text-muted-foreground duration-300 group-hover:text-neutral-200' />
									<span className='group-hover:text-secondary-foreground'>{link.label}</span>
								</Link>
							</React.Fragment>
						))}
					</div>

					<div className='mt-auto'>
						<Link href={siteConfig.email}>{siteConfig.email}</Link>
					</div>
				</SheetContent>
			</Sheet>
		</>
	)
}